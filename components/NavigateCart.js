import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDesitnation } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCart = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tailwind`bg-white flex-1`}>
            <Text style={tailwind`text-center text-xl py-4`}>Good Morning Shrivallabh</Text>
            <View style={tailwind`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete fetchDetails={true} enablePoweredByContainer={false} query={{
                        key: GOOGLE_MAPS_KEY,
                        language: 'en'
                    }} styles={styles} placeholder='Where to?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={500}
                        disableScroll={false}
                        onPress={(data, details = null) => {
                            console.log(data, details);
                            dispatch(setDesitnation({
                                location: details.geometry.location,
                                description: data.description
                            }));
                            navigation.navigate('RideOptionsCart');
                        }
                        }
                    />
                </View>
                <NavFavourites />
            </View>
            <View style={tailwind`flex flex-row justify-evenly w-full py-2 mt-auto border-gray-100 border-t`}>
                <TouchableOpacity onPress={()=>navigation.navigate('RideOptionsCart')} style={tailwind`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='car' type='font-awesome' color='white' size={16} />
                    <Text style={tailwind`text-white text-center`} >Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`flex flex-row  justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='cutlery' type='font-awesome' color='black' size={16} />
                    <Text style={tailwind`text-black text-center`} >Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCart

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})