import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import RidingOptionsList from './RidingOptionsList'

import RideData from '../data/RideData';
import { useSelector } from 'react-redux'
import { selectTravelTime } from '../slices/navSlice'

const RideOptionsCart = () => {
  const navigation = useNavigation();
  const travelTimeInfo=useSelector(selectTravelTime);
  navigateBack = () => {
    console.log('clicked back');
    navigation.goBack();
  }

  return (
    <SafeAreaView style={tailwind`bg-white flex-grow`}>
      <View style={tailwind`flex-row justify-between items-center px-5`}>
        <TouchableOpacity onPress={navigateBack} >
          <Icon name='chevron-left' color='#000' size={20} type='font-awesome' />
        </TouchableOpacity>
        <Text style={tailwind`py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance.text}</Text>
        <View></View>
      </View>
      <View>
        <RidingOptionsList data={RideData} travelTime={travelTimeInfo}  />
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCart

const styles = StyleSheet.create({})