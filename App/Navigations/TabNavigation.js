import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screen/Home";
import Fav from "../Screen/Fav";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Fav" component={Fav} />
    </Tab.Navigator>
  );
}
export default TabNavigation;