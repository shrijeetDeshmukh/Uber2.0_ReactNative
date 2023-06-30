import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import LandingOptions from '../components/LandingOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux'
import { setOrign, setDesitnation } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tailwind`bg-white h-full`}>
            <View style={tailwind`p-5`}>
                <Image style={{
                    width: 100, height: 100, resizeMode: 'contain'
                }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" }} />
                <GooglePlacesAutocomplete nearbyPlacesAPI='GooglePlacesSearch'
                    fetchDetails={true}
                    debounce={400}
                    query={{ key: GOOGLE_MAPS_KEY }}
                    minLength={2}
                    returnKeyType={'Search'}
                    enablePoweredByContainer={false}
                    placeholder='Where from'
                    styles={{ container: { flex: 0 }, textInput: { fontSize: 22 } }}
                    onPress={(data, details = null) => {
                        //console.log('data---', JSON.stringify(data)); console.log('details---', JSON.stringify(details))
                        dispatch(setOrign({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDesitnation(null));

                    }} />
                <LandingOptions></LandingOptions>
                <NavFavourites />
            </View>
            <View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    testclass: {
        fontSize: 40
    }
})