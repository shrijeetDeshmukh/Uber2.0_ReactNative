import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeScreenOptions from '../data/HomeScreenOptions'

const NavOptions = () => {
    return (
        <View>
            <FlatList data={HomeScreenOptions} horizontal renderItem={({item})=>{
                <TouchableOpacity>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            }} />
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({})