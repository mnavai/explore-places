import { View, Text, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ placeList }) => {
  return (
    <View>
      <Text
        style={{ fontSize: 18, fontFamily: "Raleway-Semibold", marginTop: 10 }}
      >
        Found {placeList.length} places
      </Text>
      <FlatList 
        data={placeList} 
        renderItem={({ item }) => (
            <PlaceItem place={item} />
        )} />
    </View>
  );
};
export default PlaceList;
