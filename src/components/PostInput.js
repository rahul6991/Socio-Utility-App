import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, Text, Dimensions, Button } from 'react-native';
const { height: HEIGHT } = Dimensions.get('window');

export default class PostInput extends Component {
    constructor(props){
        super(props);
    }
    state={
        postText: ''
    }

    render() {
        return (
            <View style={{ marginBottom: 10 }}>
                <SafeAreaView style={styles.postContainer} >
                    <Text style={styles.titleContainer}>Create Post</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        scrollEnabled={true}
                        style={styles.textInput}
                        onChangeText={(postText) => this.setState({postText})}
                        value={this.state.postText} />
                </SafeAreaView>
                <Button title="Post" 
                onPress={() => {this.props.onPost(this.state.postText);this.setState({postText: ""})}} 
                style={styles.buttonContainer} 
                disabled={this.state.postText?false:true}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    postContainer: {
        borderColor: "lightgrey",
        borderWidth: 1,
        height: HEIGHT * 0.2,
        backgroundColor: 'white',
        borderRadius: 6,
        marginBottom: 5,

    },
    titleContainer: {
        height: HEIGHT * 0.05,
        backgroundColor: '#8ACEF1',
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    },
    textInput: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        padding: 5,
        paddingLeft: 10,
        height: HEIGHT * 0.15,
    },
    buttonContainer: {
        backgroundColor: '#6694F6',
    }
});

