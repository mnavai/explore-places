import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PlaceDetailItem from './PlaceDetailItem'

export default function PlaceDetail() {
  const param=useRoute().params
  const [place,setPlace] = useState([])  

  useEffect(()=>{
    setPlace(param.place)
  },[])
  return (
    <View>
      <PlaceDetailItem place={place} />
    </View>
  )
}