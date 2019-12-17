
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import LogoWithText from "./../components/LogoWithText"
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from "firebase";

export default class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: '',
  }
 
  navigateToLogin =()=>{
    this.props.navigation.navigate("Login");
  }

  handleSignup =()=>{
    const {email, password, name}= this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredentials=>{
      firebase.database().ref(`users/${JSON.stringify(userCredentials.user.uid)}`).set({
        email,
        name
    }).then((data)=>{
      return userCredentials.user.updateProfile({
        displayName: name
      })
    }).catch((error)=>{
      Alert.alert("Network error")
    })
     
    })
    .catch(error=>this.setState({errorMessage: error.message}))
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorMessage}>
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        </View>
        <View style={styles.form}>
        <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>FULL NAME</Text>
            <TextInput
              style={styles.input}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            ></TextInput>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newUserButton}
        onPress={()=>this.navigateToLogin()}
        >
          <Text style={styles.newUserButtonText}>
            Already User ? <Text style={{ fontWeight: '700' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorMessage: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:20
  },
  error: {
    color: '#e9446A',
    fontSize: 13,
    fontWeight: '700'
  },
  form: {
    marginVertical: 20,
    marginHorizontal: 30
  },
  inputBox: {
    marginBottom: 30,

  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 17,
    color: '#161F3D'
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 30,
    borderRadius: 4,
    backgroundColor: '#73C2F9',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500'
  },
  newUserButton: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  newUserButtonText: {
    fontWeight: '500'
  }
});
