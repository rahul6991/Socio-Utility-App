import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Platform, Text, Dimensions } from 'react-native';
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
import Icon from "react-native-vector-icons/Ionicons";


const RequestHeading = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headingText}>Friend Requests</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        backgroundColor: 'white',
        paddingVertical: 5

    },
    headingText:{
        fontWeight: "bold",
         marginLeft: 10,
         fontSize: 20,
         color: 'blue' 
    }
});

module.exports = RequestHeading;