import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const StatusButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.3,
        borderRadius: 10,
        height: HEIGHT * 0.05,
        backgroundColor: '#73C2F9',
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        width: WIDTH * 0.13
    }
}
);
module.exports = StatusButton;

