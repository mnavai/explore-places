import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from "../Components/Home/Header";
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';

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
    <View style={{padding:40}}>
      <Header />
      <GoogleMapView />
      <CategoryList />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </View>
  )
}
export default Home;