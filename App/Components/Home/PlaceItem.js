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
        gap: 15,
        marginBottom: 20,
      }}
    >
     {place?.photos? <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" +
            place?.photos[0]?.photo_reference +
            "&key=AIzaSyBVpVXdCtGdyQA1ncC4LN1jvpZThzT9vNA",
        }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />:
      <Image source={require('./../../../assets/placeholder.jpg')}
      style={{ width: 100, height: 100, borderRadius: 15 }}
      />}
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 14,
            fontFamily: "raleway-semibold",
            marginBottom: 5,
          }}
        >
          {place.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{ fontSize: 12, marginBottom: 10, color: Colors.DARKGRAY }}
        >
          {place.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}

export default PlaceItem;
