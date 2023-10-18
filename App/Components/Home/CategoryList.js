import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Retaurant",
      value: "retaurant",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 18, fontFamily: "Raleway-Semibold" }}>
        Select Top Category
      </Text>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <View>
            <CategoryItem category={item} />
          </View>
        )}
      />
    </View>
  );
};
export default CategoryList;
