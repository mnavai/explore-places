import { View, Text } from 'react-native'
import React from 'react'
import GoogleMapViewFull from '../Components/Search/GoogleMapViewFull';
import SearchBar from '../Components/Search/SearchBar';

const Search = () => {
  return (
    <View>
      <View style={{position:'absolute', zIndex:20}}>
        <SearchBar />
      </View>
      <GoogleMapViewFull />
    </View>
  )
}
export default Search;