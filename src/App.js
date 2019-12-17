import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase";
import firebaseConfig from './../firebaseConfig';
import LoadingPage from './pages/LoadingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator(
  {
    Home: { screen: Home }
  },
  { headerMode: 'none' }
)

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
  Signup: {
    screen: Signup
  }
})

export default createAppContainer(
  createSwitchNavigator({
    LoadingPage: LoadingPage,
    AppStack: AppStack,
    AuthStack: AuthStack
  },
    {
      initialRouteName: 'LoadingPage',
    }
  )
)
