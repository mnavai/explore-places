import React from 'react'
import { View, Text } from 'react-native'

const PlaceDetailItem=({place}) => {
  return (
    <View>
      <Text>{place.name}</Text>
    </View>
  )
}
export default PlaceDetailItem