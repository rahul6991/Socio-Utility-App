import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Platform, Text, Dimensions, Button } from 'react-native';
const { height: HEIGHT } = Dimensions.get('window');
import Icon from "react-native-vector-icons/Ionicons";
import StatusButton from './../components/StatusButton';

const RequestCard = (props) => {
    
    if(props.data.item.status === 'new'){
    return (
        <SafeAreaView style={styles.container} key={props.data.index}>
            <View style={styles.titleContainer}>
                <Icon
                    name={Platform.OS == "ios" ? "ios-contact" : "md-contact"}
                    size={70}
                    style={{ marginRight: 30, marginLeft: 10 }}
                    color="#6593F5"
                />
                <View>
                    <Text style={{fontSize: 20, fontWeight:'700'}}>
                        {props.data.item.email}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <StatusButton title="confirm" onPress={props.confirmRequest} />
                        <StatusButton title="cancel" onPress={props.rejectRequest}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
    }
    return <></>
}


const styles = StyleSheet.create({
    container: {
        borderColor: "lightgrey",
        borderWidth: 1,
        height: HEIGHT * 0.13,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 5,

    },
    titleContainer: {
        padding: 5,
        flexDirection: 'row'
    },
    confirmButtonStyle: {
        borderRadius: 20,
        marginRight: 20
    },
    cancelButtonStyle: {
        borderRadius: 9,
        marginRight: 20,
        backgroundColor: 'lightgrey'
    }
});

module.exports = RequestCard;