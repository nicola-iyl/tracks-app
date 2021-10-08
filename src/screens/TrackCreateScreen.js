import "../_mockLocation";
import React, {useEffect, useState} from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {

    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                console.log('non consentito');
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            console.log('non consentito b');
            setErr(e);
        }
    }

    useEffect(()=>{
        startWatching();
    },
    []);

    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Perfavore autorizza la localizzazione </Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
});

export default TrackCreateScreen;

/*const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };*/

  /*
  const { granted } = await requestForegroundPermissionsAsync();
  */