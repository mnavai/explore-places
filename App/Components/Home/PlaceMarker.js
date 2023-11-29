import React from 'react'
import { Marker } from 'react-native-maps';

const PlaceMarker = ({item}) => {
  if (!item || !item.geometry || !item.geometry.location) {
    // Return null or a default Marker if 'item' is not defined or lacks the expected structure
    return null;
  }
  return (
    <Marker 
    title={item.name} 
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