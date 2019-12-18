import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform, Text, Dimensions } from 'react-native';
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
import Icon from "react-native-vector-icons/Ionicons";


const DumyPostCard = () => {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.titleContainer}>
                <Text style={{width:20, height:20, borderRadius:20,backgroundColor:'#B0C8D8'}}></Text>
                <Text style={styles.titleText}></Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={styles.paragraphText}></Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}></Text>
                <Text style={{width:20, height:20, borderRadius:20,backgroundColor:'#B0C8D8'}}></Text>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        borderColor: "lightgrey",
        borderWidth: 1,
        minHeight: HEIGHT * 0.25,
        maxHeight: HEIGHT * .45,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 5
    },
    titleContainer: {
        height: HEIGHT * 0.05,
        padding: 5,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    titleText: {
        fontWeight: "bold",
        marginLeft: 10,
        color: '#589FD3',
        width: WIDTH * 0.8,
        backgroundColor: '#B0C8D8'
    },
    paragraph: {
        minHeight: HEIGHT * 0.15,
        justifyContent: "center",
        padding: 5,
        paddingLeft: 15
    },
    paragraphText: {
        backgroundColor: '#B0C8D8',
        fontWeight: '600',
        minHeight: HEIGHT * 0.05,
        fontSize: 20
    },
    timeContainer: {
        height: HEIGHT * 0.05,
        padding: 5,
        paddingLeft: 10,
        flexDirection: 'row-reverse',
    },
    timeText: {
        backgroundColor: '#B0C8D8',
        fontWeight: "bold",
        marginRight: 10,
        color: 'grey',
        width: WIDTH * 0.6,
        textAlign: 'right'
    }
});

module.exports = DumyPostCard;