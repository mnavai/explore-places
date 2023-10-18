import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from "../Components/Home/Header";
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {

  useEffect(()=>{
    GetNearbySearchPlace();
  },[])

  const GetNearbySearchPlace = () => {
    GlobalApi.nearByPlace().then(resp => {
      console.log(resp.data.results)
    })
  }
  return (
    <View style={{padding:40}}>
      <Header />
      <GoogleMapView />
      <CategoryList />
    </View>
  )
}
export default Home;