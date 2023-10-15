import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screen/Home";
import Fav from "../Screen/Fav";
import Search from "../Screen/Search";
import Profile from '../Screen/Profile';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();  
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Fav" component={Fav} />
    </Tab.Navigator>
  );
}
export default TabNavigation;