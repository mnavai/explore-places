import { View, Text, Image } from 'react-native'
import { AntDesign } from "@expo/vector-icons"; 
import React from 'react'


const PlaceItem = ({ place }) => {
  return (
    <View style={{ display:'flex', flexDirection:'row', flex:1}}>
      <Image
        source={require("./../../../assets/placeholder.jpg")}
        style={{ width: 120, height: 120 }}
      />
      <View>
        <Text style={{fontSize:16, fontFamily:'Raleway-Semibold'}}>{place.name}</Text>
        <Text style={{fontSize:16}}>{place.vicinity}</Text>
      </View>
      <View>
        <AntDesign name="star" size={20} color="black" />
        <Text>{place.rating}</Text>
      </View>
    </View>
  );
}

export default PlaceItem;