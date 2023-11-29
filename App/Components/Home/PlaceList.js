import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ placeList }) => {
  const navigator = useNavigation()
  const onPlaceClick=(item)=>{
    navigator.navigate('place-detail')
  }
  return (
    <View>
      <Text
        style={{ fontSize: 18, fontFamily: "Raleway-Semibold", marginTop: 10, marginBottom:15 }}
      >
        Found {placeList.length} places
      </Text>
      <FlatList 
        data={placeList} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>onPlaceClick(item)}>
            <PlaceItem place={item} />
          </TouchableOpacity>  
        )} />
    </View>
  );
};
export default PlaceList;
