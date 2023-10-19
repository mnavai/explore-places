import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import Colors from "../../Shared/Colors";

const PlaceItem = ({ place }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Image
        source={require("./../../../assets/placeholder.jpg")}
        style={{ width: 120, height: 120 }}
      />
      <View>
        <Text 
            numberOfLines={2}
            style={{ fontSize: 16, fontFamily: "Raleway-Semibold", marginBottom:10  }}>
            {place.name}
        </Text>
        <Text
            numberOfLines={2} 
            style={{ fontSize: 16, marginBottom:10 }}>{place.vicinity}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap:5
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlaceItem;
