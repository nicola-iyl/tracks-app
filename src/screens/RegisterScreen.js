import React from "react";
import {View,Text,StyleSheet} from "react-native";

const RegisterScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Register Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
});

export default RegisterScreen;
