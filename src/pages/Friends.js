import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, Alert } from 'react-native';
import * as firebase from "firebase";
import SearchBar from './../components/SearchBar';
import RequestHeading from './../components/RequestHeading';
import RequestCard from './../components/RequestCard';
import RequestToCard from './../components/RequestToCard';

export default class Friends extends Component {
 
  state = {
    email: "",
    searchText: "",
    uid: "",
    displayName: "",
    requestTo: [],
    request: []
  }

  componentDidMount = () => {
    const { email, displayName, uid } = firebase.auth().currentUser;
    this.setState({ email, displayName, uid });
    this.cancelRequest();
    firebase.database().ref(`users/${JSON.stringify(uid)}/friends/`)
      .once('value')
      .then(result => {
        result = result.val();
        result = result.filter(v => v.status == 'new');
        this.setState({ request: result })
      }).catch(err => {
        Alert.alert("Network issue");
      })
  }

  requestFriendShip = () => {
    let userObj = {
      uid: JSON.stringify(this.state.uid),
      email: this.state.email,
      name: this.state.displayName,
      status: "new"
    }
    let newFriend = this.state.requestTo;
    newFriend[0].status = 'sent';

    firebase.database().ref(`users/${this.state.requestTo[0].uid}/friends/`)
      .once('value')
      .then(res => {
        if (res.val() === null) {
          res = [];
          res.push(userObj);
        } else {
          res = res.val();
          res.push(userObj);
        }
        return res;
      })
      .then(data => {
        firebase.database().ref(`users/${this.state.requestTo[0].uid}/friends/`)
          .set(data)
        return Promise.resolve()
      })
      .then(() => {
        firebase.database().ref(`users/${JSON.stringify(this.state.uid)}/friends/`)
          .once('value')
          .then(result => {
            delete newFriend[0].friends;
            if (result.val() === null) {
              result = [];
              result.push(newFriend[0]);
            }
            else {
              result = result.val();
              result.push(newFriend[0]);
            }
            return result;
          })
          .then(result => {
            firebase.database().ref(`users/${JSON.stringify(this.state.uid)}/friends/`)
              .set(result)
              .then(data => {
                this.setState({
                  searchText: "",
                  requestTo: []
                })
              })
          })
      })
      .catch(err => { Alert.alert("Request Already sent") });
  }

  cancelRequest = () => {
    this.setState({
      searchText: "",
      requestTo: []
    })
  }

  setRequestStatusAccepted = (val, status) => {
    let newData = this.state.request.map(v => {
      if (val.email == v.email) {
        v.status = status;
      }
      return v;
    });
    firebase.database().ref(`users/${JSON.stringify(this.state.uid)}/friends/`)
      .set(newData)
      .then(res => {
        firebase.database().ref(`users/${val.uid}/friends/`)
          .once('value')
          .then(result => {
            let friendArray = result.val().map(v => {
              if (v.email == this.state.email) {
                v.status = status;
              }
              return v;
            });
            return friendArray;
          })
          .then(result => {
            firebase.database().ref(`users/${val.uid}/friends/`)
              .set(result)
              .then(data => {
                this.setState({
                  request: newData
                })
              })
          })
      })
  }
  setRequestStatusReject = (val) => {

    let newData = this.state.request.filter(v => {
      if (val.email == v.email) {
        return false;
      }
      return true;
    });
    firebase.database().ref(`users/${JSON.stringify(this.state.uid)}/friends/`)
      .set(newData)
      .then(res => {
        firebase.database().ref(`users/${val.uid}/friends/`)
          .once('value')
          .then(result => {
            let friendArray = result.val().filter(v => {
              if (v.email == this.state.email) {
                return false;
              }
              return true;
            });
            return friendArray;
          })
          .then(result => {
            firebase.database().ref(`users/${val.uid}/friends/`)
              .set(result)
              .then(data => {
                this.setState({
                  request: newData
                })
              })
          })
      })

  }
  search = () => {
    firebase.database().ref('users/').orderByChild("email").equalTo(this.state.searchText)
      .once('value', res => {
        if (res.val()) 
        {   let keys = Object.keys(res.val());
            let uid = JSON.stringify(JSON.parse(keys[0]));
            let data = res.val()[uid];
            data.uid = uid;
            let requestTo = this.state.requestTo;
            requestTo[0] = data;
            this.setState({ requestTo })
        }
      })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar onChangeText={(text) => this.setState({ searchText: text })}
          onPress={() => { this.search() }} />
        <RequestToCard
          data={this.state.requestTo}
          onConfirm={() => { this.requestFriendShip() }}
          onCancel={() => { this.cancelRequest() }} />
        <FlatList
          data={this.state.request}
          ListHeaderComponent={<RequestHeading />}
          stickyHeaderIndices={[0]}
          renderItem={(data) => (
            <RequestCard
              data={data}
              rejectRequest={() => { this.setRequestStatusReject(data.item) }}
              confirmRequest={() => { this.setRequestStatusAccepted(data.item, 'accepted') }}
            />
          )}
          keyExtractor={(post, index) => index.toString()}
        />

      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

