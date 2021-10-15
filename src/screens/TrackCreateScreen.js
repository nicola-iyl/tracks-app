import "../_mockLocation";
import React, {useContext} from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView} from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {

    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation((location) => addLocation(location));

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Perfavore autorizza la localizzazione </Text> : null}
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

