
import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import logoImage from "./../assets/images/logo.png"
const { width, fontScale } = Dimensions.get('window');


const LogoWithText = () => {
  const caption = 'Socio-Utility';
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.imageContainer} />
      <Text style={styles.imageText}>Socio-Utility{fontScale}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imageContainer: {
    width: width * 0.4,
    height: width * 0.4
  },
  imageText: {
    fontSize: 20 / fontScale,
    fontWeight: '400'
  }

});


export default LogoWithText;