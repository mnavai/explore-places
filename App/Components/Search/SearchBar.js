import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";
import Colors from "../../Shared/Colors";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar=() => {
  return (
    <View>
      <LinearGradient
        // Button Linear Gradient
        colors={['white', "transparent"]}
        style={{padding:20, width: Dimensions.get("screen".width)}}>
            <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "Raleway-Bold", fontSize: 25 }}>
            Discover
          </Text>
          <Image
            source={require("./../../../assets/placeholder.jpg")}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 5,
            flexDirection: "row",
            padding: 10,
            gap: 5,
            elevation: 0.7,
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            borderRadius: 5,
          }}
        >
          <Ionicons name="search" size={24} color={Colors.DARK_GRAY} />
          <TextInput
            placeholder="Search"
            style={{ backgroundColor: Colors.WHITE, width: "80%" }}
            onChangeText={(value) => console.log(value)}
            onSubmitEditing={() => console.log(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  )
}
export default SearchBar