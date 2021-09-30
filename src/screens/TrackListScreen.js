import React from "react";
import {View,Text,StyleSheet} from "react-native";

const TrackListScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Track List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
});

export default TrackListScreen;
