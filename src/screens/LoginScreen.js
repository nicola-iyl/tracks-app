import React from "react";
import {View,Text,StyleSheet} from "react-native";

const LoginScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Login Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
});

export default LoginScreen;
