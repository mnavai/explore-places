import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../Shared/Colors'
import { AntDesign } from "@expo/vector-icons";
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import GoogleMapView from '../Home/GoogleMapView';

const PlaceDetailItem=({place, onDirectionClick}) => {
  return (
    <View>
      <Text style={{ fontSize: 26, fontFamily: "Raleway-Bold", marginBottom: 10 }}>{place.name}</Text>
      {place?.photos? <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" +
            place?.photos[0]?.photo_reference +
            "&key=AIzaSyBVpVXdCtGdyQA1ncC4LN1jvpZThzT9vNA",
        }}
        style={{ width: 250, height: 250, borderRadius: 15 }}
      />:
      <Image source={require('./../../../assets/placeholder.jpg')}
      style={{ width: 250, height: 250, borderRadius: 15 }}
      />}
      <View
        style={{
          display:'flex',
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name='star' size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, marginTop: 10, color: Colors.DARKGRAY }} numberOfLines={2}>{place.vicinity}</Text>
        {place?.opening_hours ? (
          <Text style={{ fontFamily:"Raleway-Bold", marginTop: 5, color: "red" }}>
            {place?.opening_hours?.open_now == true ? "Open" : "Closed"}
          </Text>
        ) : null}
      </View>
       <View style={{marginTop:10,flexDirection:'row',
    display:'flex', gap:10}}>
        <TouchableOpacity onPress={()=>onDirectionClick()}
          style={{
            direction: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor:Colors.GRAY,
            width:110,
            padding:3,
            borderRadius:40,
            justifyContent:'center'
          }}
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Share.SharePlace(place)}
          style={{
            direction: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor:Colors.GRAY,
            width:90,
            padding:3,
            borderRadius:40,
            justifyContent:'center'
          }}
        >
         <Ionicons name="md-share-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Share</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
export default PlaceDetailItem