import { View, Text, Dimensions } from 'react-native';
import React, { useContext, useEffect, useState } from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import { UserLocationContext } from '../../Context/UserLocationContext';
import PlaceMarker from './PlaceMarker';

const GoogleMapView = ({placeList}) => {

  const [mapRegion, setmapRegion] = useState({});  

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if(location){
        setmapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0421,
        });
    }
  },[location]);
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
          marginLeft: 3,
          fontWeight: "600",
          fontFamily: "raleway-semibold",
        }}
      >
        Top Near Places
      </Text>
      <View style={{ marginTop: 10 }}>
      {location? <MapView
          style={{
            width: Dimensions.get("screen").width * 0.82,
            height: Dimensions.get("screen").height * 0.23,
            borderRadius: 20,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="You" coordinate={mapRegion} />
            {placeList?.map((item,index)=>index<=5&&(
                <PlaceMarker item={item} key={index}/>
            ))}
        </MapView>:null}
      </View>
    </View>
  );
}
export default GoogleMapView