import { View, Text, Image, TextInput, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
      <Image source={require('./../../../assets/logo.png')} style={styles.logo} />
      <View>
        <TextInput placeholder='Search' style={styles.searchBar}></TextInput>
      </View>
      <Image source={require('./../../../assets/placeholder.jpg')} style={styles.userImage}/>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get('screen').width*0.6
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
});