import { View, Text } from "react-native";
import React from "react";

const CategoryItem = ({category}) => {
  return (
    <View>
      <Text>{category.name}</Text>
    </View>
  );
};
export default CategoryItem;
