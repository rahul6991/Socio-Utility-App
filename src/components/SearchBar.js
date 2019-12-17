import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import Icon from "react-native-vector-icons/Ionicons";

export default class SearchBar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Icon
                    name={Platform.OS == "ios" ? "ios-contact" : "md-contact"}
                    size={30} style={{ paddingTop: 10 }} />
                <TextInput placeholder="Search bar" style={styles.input} {...this.props}/>
                <Icon
                    name={Platform.OS == "ios" ? "ios-search" : "md-search"}
                    size={30} style={{ paddingTop: 10 }} {...this.props}/>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'blue',
        width: WIDTH,
        paddingBottom:5,
        paddingHorizontal:10,
        backgroundColor: '#88AAF8'
    },
    input: {
        paddingLeft: 20,
        width: WIDTH * 0.8,
        alignItems: 'center',
        borderBottomWidth: 1,
        fontWeight: '400',
        fontSize:22,
        borderColor: 'white'

    }
});

