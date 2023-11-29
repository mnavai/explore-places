import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Home from '../Screen/Home'
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail'
const HomeNavigation = () => {
  const isAndroid = true
  const Stack=createStackNavigator()  
  return (
    <Stack.Navigator screenOptions={{gestureEnabled:true, headerShown:false,...(isAndroid&&TransitionPresets.ModalPresentationIOS)}}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='place-detail' component={PlaceDetail} screenOptions={{presentation: 'modal'}} />
    </Stack.Navigator>
  )
}
export default HomeNavigation