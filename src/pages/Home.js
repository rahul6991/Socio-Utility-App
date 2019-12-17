import React, { Component } from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/Ionicons";

import Post from './Post';
import Profile from './Profile';
import Friends from './Friends';



const TabBarComponent = props => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator(
  {
    Post: {
      screen: Post,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: (<Icon
          name={Platform.OS == "ios" ? "ios-home" : "md-home"}
        size={30} style={{ paddingTop: 10 }} /> )
      },
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: 'Friends',
        tabBarIcon:  (<Icon
        name={Platform.OS == "ios" ? "ios-contacts" : "md-contacts"}
        size={30} style={{ paddingTop: 10 }} /> )
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarOptions: {
          activeTintColor: 'blue',
      },
        tabBarIcon: (<Icon 
        name={Platform.OS == "ios" ? "ios-settings" : "md-settings"}
        size={30} style={{ paddingTop: 10 }} /> ),
      },
    },
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60', backgroundColor: 'white' }} />
    ),
  }
);

export default TabScreens;

