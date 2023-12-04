import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ placeList }) => {
  const navigator = useNavigation()
  const onPlaceClick=(item)=>{
    navigator.navigate('place-detail',{place:item})
  }
  return (
    <View>
    <Text style={{ fontSize: 18, fontFamily: "raleway-semibold", marginTop: 10, marginBottom: 15 }}>
      Found {placeList.length} places
    </Text>
    {placeList.length > 0 ? (
      <FlatList 
        data={placeList} 
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPlaceClick(item)}>
            <PlaceItem place={item} />
          </TouchableOpacity>
        )} 
      />
    ) : (
      <Text>No places found.</Text>
    )}
  </View>
  );
};
export default PlaceList;
