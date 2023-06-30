import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import HomeScreenOptions from '../data/HomeScreenOptions'
import tailwind from 'twrnc'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux';

const LandingOptions = () => {
    const origin = useSelector(selectOrigin);
    console.log(origin);
    const navigation = useNavigation();
    const openService = (item) => {
        navigation.navigate(item.screen);
    }
    return (
        <View>
            <FlatList data={HomeScreenOptions} keyExtractor={(item) => item.id} horizontal renderItem={({ item }) => (
                <TouchableOpacity disabled={!origin} onPress={() => openService(item)} style={tailwind`p-2 pl-4 pb-8 m-2 pt-4 bg-gray-200 `}>
                    <View style={tailwind`${!origin ? 'opacity-20' : null}`}>
                        <Image source={{ uri: item.image }} style={{ width: 120, height: 120, resizeMode: 'contain' }} />
                        <Text style={tailwind`mt-1 text-lg font-semibold`}>{item.title}</Text>
                        <Icon style={tailwind`p-2 bg-black rounded-full w-10 mt-4`}
                            type='antdesign' name='arrowright' color='white' />
                    </View>
                </TouchableOpacity>
            )} />
        </View>
    )
}

export default LandingOptions

const styles = StyleSheet.create({})