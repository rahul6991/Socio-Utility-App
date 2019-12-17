
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LogoWithText from "./../components/LogoWithText"
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from "firebase";


export default class Login extends Component {
  
  state = {
    email: '',
    password: '',
    errorMessage: '',
    inputBoxFocus: false
  }

  inputOnFocus = () => {
    if (!this.state.inputBoxFocus) this.setState({ inputBoxFocus: true });
  }

  inputOnBlur = () => {
    this.setState({ inputBoxFocus: false });
  }

  navigateToSignup = () => {
    this.props.navigation.navigate("Signup");
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    const logo = !this.state.inputBoxFocus ? <LogoWithText /> : null
    return (
      <SafeAreaView style={styles.container}>
        {logo}
        <View style={styles.errorMessage}>
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              onFocus={() => this.inputOnFocus()}
              onBlur={() => this.inputOnBlur()}
            ></TextInput>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              onFocus={() => this.inputOnFocus()}
              onBlur={() => this.inputOnBlur()}

            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newUserButton}
          onPress={() => this.navigateToSignup()}
        >
          <Text style={styles.newUserButtonText}>
            New User ? <Text style={{ fontWeight: '700' }}>Sign Up</Text>
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
    marginHorizontal: 20
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
