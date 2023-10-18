import { View, Text, Dimensions } from 'react-native';
import React, { useContext, useEffect, useState } from "react";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function GoogleMapView() {
  const [mapRegion, setmapRegion] = useState({});  

  const { location, setLocation } = useContext(UserLocationContext);
  console.log("location",location)

  useEffect(() => {
    if(location){
        setmapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0421,
        });
    }
  },[]);
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize:18, marginBottom:10, marginLeft:3, fontWeight:"600" }}>
        Top Near Places
      </Text>
      <View style={{ marginTop: 10 }}>
        <MapView
          style={{
            width: Dimensions.get("screen").width * 0.82,
            height: Dimensions.get("screen").height * 0.23,
            borderRadius: 20,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        ></MapView>
      </View>
    </View>
  );
}
