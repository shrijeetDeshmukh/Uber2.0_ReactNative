import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import FavouriteData from '../data/FavouriteData'
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import tailwind from 'twrnc'
import { Icon } from 'react-native-elements'

const NavFavourites = () => {

    return (
        <View>
            <FlatList data={FavouriteData} keyExtractor={item => item.id} ItemSeparatorComponent={()=>(
                <View style={tailwind`h-0.5 bg-gray-200`}></View>)} renderItem={({ item }) =>
                <TouchableOpacity style={tailwind`flex flex-row items-center p-2`}>
                    <Icon style={tailwind`mr-4 rounded-full bg-gray-300 p-2`}
                        name={item.icon} color='white' size={18}
                    />
                    <View style={tailwind`flex-1`}>
                        <Text style={tailwind`font-semibold text-lg`}>{item.location}</Text>
                        <Text style={tailwind`text-gray-500 text-sm`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            } />
        </View>
    )
}

export default NavFavourites

const styles = StyleSheet.create({})