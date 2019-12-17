import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default class ProfileImageCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.insideContainer}>
                    <View style={{ flex: 1, justifyContent: 'space-around' }}>
                        <View>
                            <Text style={styles.imageText}> {this.props.displayName}  </Text>
                            <Text style={{ color: 'white' }}>________________________</Text>
                        </View>
                    </View>
                </View>

                <Image source={require('./../assets/images/rock.png')} style={styles.imageContainer} />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        marginBottom: 10,
        backgroundColor: 'white',
        height: HEIGHT * 0.3,
        flexDirection: "column",
    },
    insideContainer: {
        height: HEIGHT * 0.25,
        backgroundColor: '#4267B2',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingTop: 30,
        paddingHorizontal: 10
    },
    imageText: {
        fontSize: 20,
        color: 'white'
    },
    imageContainer: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: 20,
        bottom: 10,
        borderRadius: 30
    }
})