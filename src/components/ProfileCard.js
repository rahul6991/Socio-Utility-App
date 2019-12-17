import React, { Component } from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import * as firebase from "firebase";

export default class ProfileCard extends Component {
    constructor(props) {
        super(props);
    }

    logout = (val) => {
        if(val === "Logout"){
            firebase.auth().signOut()
        }
      }

    render() {
        return (
            <TouchableOpacity  style={styles.Container} onPress={()=>{this.logout(this.props.val.title)}}>
                <Text style={styles.imageText}>{this.props.val.title}  </Text>
                <Text style={{color:'#1D2951'}}>{this.props.val.description} </Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        padding:10,
        marginVertical:5,
        backgroundColor: 'white',
        height: WIDTH * 0.15,
        flexDirection: "column"
    },
    imageText: {
        fontSize: 20,
        color:'#1B7EF6'
    }
})