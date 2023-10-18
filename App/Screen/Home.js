import { View, Text } from 'react-native'
import React from 'react'
import Header from "../Components/Home/Header";
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';

const Home = () => {
  return (
    <View style={{padding:40}}>
      <Header />
      <GoogleMapView />
      <CategoryList />
    </View>
  )
}
export default Home;