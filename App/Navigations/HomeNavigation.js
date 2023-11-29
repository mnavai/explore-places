import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screen/Home'
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail'
const HomeNavigation = () => {
  const Stack=createStackNavigator()  
  return (
    <Stack.Navigator>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='place-detail' component={PlaceDetail} />
    </Stack.Navigator>
  )
}
export default HomeNavigation