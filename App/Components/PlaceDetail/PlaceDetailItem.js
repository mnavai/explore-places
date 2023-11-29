import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../Shared/Colors'
import { AntDesign } from "@expo/vector-icons";

const PlaceDetailItem=({place}) => {
  return (
    <View>
      <Text style={{ fontSize: 26, fontFamily: "Raleway-Bold" }}>{place.name}</Text>
      <View
        style={{
          display:'flex',
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name='star' size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>
    </View>
  )
}
export default PlaceDetailItem