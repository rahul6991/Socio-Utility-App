import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import cards from './../components/cards';
import ProfileImageCard from '../components/ProfileImageCard';
import * as firebase from "firebase";


export default class Profile extends Component{
  
  state= {
    email: "",
    displayName: ""
  }

  componentDidMount(){
    const {email, displayName} = firebase.auth().currentUser;
    this.setState({email,displayName})
  }

  logout = () => {
    firebase.auth().signOut()
  }
  
    render(){
        return (<View style={{flex:1, justifyContent: 'center'}}>
            <ProfileImageCard displayName={this.state.displayName}/>
            <ScrollView>
            {cards.map(function (value, index) {
                        return (
                            <View key={index}>
                            <ProfileCard val={value} />
                            </View>
                        );
                    })}
           </ScrollView>
        </View>);
    }

  }
