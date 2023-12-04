import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

const CategoryItem = ({category}) => {

  return (
    <View style={{padding:5, alignItems:'center',margin:8,width:100, height:100, backgroundColor:Colors.WHITE, justifyContent:'center', borderRadius:15 }}>
      <Image source={category.icon} style={{ width: 50, height: 50 }} />
      <Text style={{fontSize:13, fontFamily:'raleway-regular'}}>{category.name}</Text>
    </View>
  );
};
export default CategoryItem;
