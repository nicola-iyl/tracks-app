import React, { useContext } from "react";
import {Text, View, StyleSheet, ActivityIndicator} from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import {Context as Locatiocontext} from "../context/LocationContext";

const Map = () => {

    const { state: { currentLocation } } = useContext(Locatiocontext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
     }

    const initialLocation = {
        longitude: -122.0312186,
        latitude: 37.33233141,
    };
    return <MapView 
        style={styles.map} 
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
    >
        <Circle
            center={currentLocation.coords}
            radius={15}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"
        />
    </MapView>

    /*return <MapView
        style={styles.map}
        initialRegion={{
            ...initialLocation,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}

    >
    </MapView>*/
};

const styles = StyleSheet.create({
    map:{
        height:300
    }
});

export default Map;
