import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PlaceDetailItem from './PlaceDetailItem'
import Colors from '../../Shared/Colors'

export default function PlaceDetail() {
  const param=useRoute().params
  const [place,setPlace] = useState([])  

  useEffect(()=>{
    setPlace(param.place)
  },[])
  return (
    <View style={{padding:20,backgroundColor: Colors.WHITE, flex:1}}>
      <PlaceDetailItem place={place} />
    </View>
  )
}