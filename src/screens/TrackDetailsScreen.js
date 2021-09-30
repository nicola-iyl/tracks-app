import React from "react";
import {View,Text,StyleSheet} from "react-native";

const TrackDetailsScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Track Details Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
});

export default TrackDetailsScreen;
