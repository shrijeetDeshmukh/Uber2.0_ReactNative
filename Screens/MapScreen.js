import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCart from '../components/NavigateCart'
import RideOptionsCart from '../components/RideOptionsCart'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Homescreen')} style={tailwind`absolute bg-gray-100 top-16 left-6 z-50 p-2 rounded-full shadow-lg`}>
        <Icon name="menu" size={30} color="black" />
      </TouchableOpacity>
      <View style={tailwind`h-1/2`}>
        <Map></Map>
      </View>
      <View style={tailwind`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen component={NavigateCart} name="NavigateCart" options={{ headerShown: false }} />
          <Stack.Screen component={RideOptionsCart} name="RideOptionsCart" options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </>
  )
}

export default MapScreen

const styles = StyleSheet.create({})