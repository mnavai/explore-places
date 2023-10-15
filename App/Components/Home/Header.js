import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Image source={require('./../../../assets/logo.png')} style={styles.logo} />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50
    }
})