import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, ActivityIndicator } from 'react-native';
import * as firebase from "firebase";


export default class LoadingPage extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "AppStack" : "AuthStack");
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6593F5",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
