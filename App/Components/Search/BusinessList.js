import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import BusinessItem from './BusinessItem'

const BusinessList=({placeList})=> {
  return (
    <View>
        <LinearGradient
        colors={["transparent", Colors.WHITE]}
        style={{padding:20, width: Dimensions.get("screen".width)}}>
            <FlatList 
                data={placeList}
                horizontal={true}
                renderItem={({item, index})=>index<=6&&(
                    <BusinessItem place={item}/>
                )}
            />
        </LinearGradient>
    </View>
  )
}
export default BusinessList