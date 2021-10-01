import React from "react";
import {View,Text,StyleSheet,Button} from "react-native";

const LoginScreen = ({navigation}) => {
    return(
        <View>
            <Text style={styles.text}>Login Screen</Text>
            <Button title="Go to Register" onPress={()=> { navigation.navigate('Register')}} />
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
});

export default LoginScreen;
