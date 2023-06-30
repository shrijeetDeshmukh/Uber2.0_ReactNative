import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image,SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import tailwind from 'twrnc';

const RidingOptionsList = ({data,travelTime}) => {
    const [isSelected, setisSelected] = useState(null);
    setUserChoice = (item) => {
        console.log(item);
        setisSelected(item);
        console.log(isSelected?.id)
    }
    const SURGE_CHARGE_RATE=1.5;
    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={({ item }) =>
                <TouchableOpacity onPress={() => setUserChoice(item)} style={tailwind`flex-row p-2 items-center justify-between border-b border-gray-300 px-10 ${item.id === isSelected?.id ? 'bg-gray-300' : ''}`}>
                    <Image source={{ uri: item.image }} style={tailwind`h-20 w-20`} resizeMode='contain' />
                    <View>
                        <Text style={tailwind`text-xl font-semibold`}>{item.title}</Text>
                        <Text>{travelTime?.duration.text} Time</Text>
                    </View>
                    <Text style={tailwind`text-xl`}>
                     {
                        new Intl.NumberFormat('en-gb', {
                           style: 'currency',
                           currency: 'GBP'
                        }).format((travelTime?.duration.value *SURGE_CHARGE_RATE * item.multiplier /100))
                     }      

                    </Text>
                </TouchableOpacity>
            } key={(item) => item.id} />
            <View>
                <TouchableOpacity disabled={!isSelected?.title} style={tailwind`bg-black h-20 text-center py-3 ${!isSelected? 'bg-gray-300' : ''}`}>
                    <Text style={tailwind`text-xl text-center text-white`}>Choice {isSelected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RidingOptionsList;

const styles = StyleSheet.create({})