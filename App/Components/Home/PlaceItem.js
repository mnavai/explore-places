import { View, Text, Image } from 'react-native'
import React from 'react'

const PlaceItem = ({ place }) => {
  return (
    <View>
      <Image
        source={require("./../../../assets/placeholder.jpg")}
        style={{ width: 120, height: 120 }}
      />
      <View>
        <Text>{place.name}</Text>
        <Text>{place.vicinity}</Text>
      </View>
    </View>
  );
}

export default PlaceItem;