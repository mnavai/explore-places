import { ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from "../Components/Home/Header";
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
import { UserLocationContext } from '../Context/UserLocationContext';

const Home = () => {
  const [placeList, setPlaceList] = useState([]);
  const {location, setLocation} = useContext(UserLocationContext)

  useEffect(()=>{
    if (location){
      GetNearbySearchPlace('restaurant');
    }
  },[location])

  const GetNearbySearchPlace = (value) => {
    
    GlobalApi.nearByPlace(location.coords.latitude,location.coords.longitude, value).then(resp => {
      setPlaceList(resp.data.results)
    })
  }
  return (
    <ScrollView style={{padding:40}}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList setSelectedCategory={(value) => GetNearbySearchPlace(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  )
}
export default Home;