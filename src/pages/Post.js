import React, { Component, Suspense, lazy } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, Text, StatusBar } from 'react-native';
import PostInput from "./../components/PostInput";
import * as firebase from "firebase";
const PostCard = lazy(() => import("./../components/PostCard"));

export default class Post extends Component {

  state = {
    email: "",
    uid: "",
    displayName: "",
    allPost: []
  }

  UNSAFE_componentWillMount = () => {
    const { email, displayName, uid } = firebase.auth().currentUser;
    this.setState({ email, displayName, uid });
  }

  componentDidMount = () => {
    let allPost = [];
    firebase.database().ref(`users/${JSON.stringify(this.state.uid)}/friends/`)
      .once('value')
      .then(res => {
        if (res.val() === null) {
          res = [];
        } else {
          res = res.val();
          res = res.map(v => {
            return v.uid
          })
        }
        res.push(JSON.stringify(this.state.uid));
        return res;
      })
      .then(data => {
        var promises = data.map(function (key) {
          return firebase.database().ref("users/").child(key).once("value");
        });
        Promise.all(promises).then(function (snapshots) {
          snapshots.forEach(function (snapshot) {
            if (snapshot.val().posts) {
              allPost = allPost.concat(snapshot.val().posts);
            }

          })
          return allPost;
        }).then(data => {
          data.sort(function (a, b) {
            var dateA = new Date(a.date), dateB = new Date(b.date);
            return dateB - dateA;
          });
          this.setState({ allPost: data })
        })
      })
  }

  onPost = (postText) => {

    let postObj = {
      name: this.state.displayName,
      post: postText,
      date: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    }

    firebase.database().ref(`users/${JSON.stringify(this.state.uid)}/posts/`)
      .once('value')
      .then(res => {
        if (res.val() === null) {
          res = [];
          res.push(postObj);
        } else {
          res = res.val();
          res.push(postObj);
        }
        return res;
      })
      .then(data => {
        firebase.database().ref(`users/${JSON.stringify(this.state.uid)}/posts/`)
          .set(data)
        return Promise.resolve()
      }).then(data => {
        let oldPost = this.state.allPost;
        oldPost.unshift(postObj);
        this.setState({ postText: "", allPost: oldPost })
      })
  }


  render() {
    return (
      <>
        <StatusBar backgroundColor="#3D61A7" barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.allPost}
            ListHeaderComponent={
              <PostInput
                onPost={this.onPost} />}
            renderItem={(data) => (
              <Suspense fallback={<ActivityIndicator size="large"></ActivityIndicator>}>
                <PostCard data={data} />
              </Suspense>

            )}
            keyExtractor={(post, index) => index.toString()}
          />
        </SafeAreaView >
      </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E9EBEE'
  },
  postsContainer: {
    backgroundColor: "blue",
    color: "black"
  }
});

