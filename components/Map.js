import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tailwind from 'twrnc';
import { selectDesination, selectOrigin, selectTravelTime, setTravelTime } from '../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from "@env";


const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDesination);
    const mapRef = useRef(null);
    console.log(origin);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Inside useeffect');
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(["Origin", "destination"], {
            edgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50,
            },
        })
    }, [origin, destination]);

    useEffect(() => {
        console.log('Inside destination matrix api');
        if (!origin || !destination) return;

        const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${GOOGLE_MAPS_KEY}`;

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(setTravelTime(data.rows[0].elements[0]));
            }

            )
    }
        , [origin, destination, GOOGLE_MAPS_KEY])
    return (
        <View>
            <MapView style={tailwind`h-100`}
                mapType='mutedStandard'
                minZoomLevel={2}
                ref={mapRef}
                initialRegion={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {origin && destination && (
                    <MapViewDirections
                        origin={origin.description} destination={destination.description}
                        apikey={GOOGLE_MAPS_KEY} strokeWidth={3} strokeColor='black'
                    />
                )}
                {
                    origin?.location && <Marker
                        title='Origin'
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng,
                        }
                        }
                        identifier='Origin'
                        description={origin.description}
                    />
                }
                {
                    destination?.location && <Marker
                        title='destination'
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng,
                        }
                        }
                        identifier='destination'
                        description={destination.description}
                    />
                }
            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({})


