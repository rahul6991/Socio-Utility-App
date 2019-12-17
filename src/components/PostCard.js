import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform, Text, Dimensions } from 'react-native';
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
import Icon from "react-native-vector-icons/Ionicons";


const PostCard = (props) => {
    return (
        <SafeAreaView style={styles.container} key={props.data.index}>
            <View style={styles.titleContainer}>
                <Icon
                    name={Platform.OS == "ios" ? "ios-contact" : "md-contact"}
                    size={20} color="#B0C8D8"
                />
                <Text style={styles.titleText}>{props.data.item.name}</Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={{ fontWeight: '600', fontSize: 20 }}>{props.data.item.post}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Icon
                    name={Platform.OS == "ios" ? "ios-time" : "md-time"}
                    color="#63E1D1"
                    size={20}
                />
                <Text style={styles.timeText}>{props.data.item.date}</Text>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        borderColor: "lightgrey",
        borderWidth: 1,
        minHeight:HEIGHT * 0.25,
        maxHeight: HEIGHT * .45,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 5,

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
        width: WIDTH * 0.8
    },
    paragraph: {
        minHeight: HEIGHT * 0.15,
        maxHeight: HEIGHT * .35,
        justifyContent: "center",
        padding: 5,
        paddingLeft: 15
    },
    timeContainer: {
        height: HEIGHT * 0.05,
        padding: 5,
        paddingLeft: 10,
        flexDirection: 'row-reverse',
    },
    timeText: {
        fontWeight: "bold",
        marginRight: 10,
        color: 'grey',
        width: WIDTH * 0.8,
        textAlign:'right'
    }
});

module.exports = PostCard;