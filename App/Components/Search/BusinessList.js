import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

const BusinessList=({placeList})=> {
  return (
    <View>
        <LinearGradient
        colors={["transparent", Colors.WHITE]}
        style={{padding:20, width: Dimensions.get("screen".width)}}>
        </LinearGradient>
    </View>
  )
}
export default BusinessList