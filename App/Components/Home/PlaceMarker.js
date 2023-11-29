import React from 'react'
import { Marker } from 'react-native-maps';

const PlaceMarker = ({item}) => {
  return (
    <Marker 
    title="You"
    coordinate={
        {
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0421,
        }
    }
     >
    </Marker>
  )
}
export default PlaceMarker;