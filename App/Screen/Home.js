import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from "../Components/Home/Header";
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
// Testing
const Home = () => {
  const [placeList, setPlaceList] = useState([]);

  useEffect(()=>{
    GetNearbySearchPlace();
  },[])

  const GetNearbySearchPlace = () => {
    GlobalApi.nearByPlace().then(resp => {
      console.log("res",resp.data.results)
      setPlaceList(resp.data.results)
    })
  }
  return (
    <ScrollView style={{padding:40}}>
      <Header />
      <GoogleMapView />
      <CategoryList />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  )
}
export default Home;