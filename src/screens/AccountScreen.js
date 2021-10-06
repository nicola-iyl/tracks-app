import React, {useContext} from "react";
import {View,Text,StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import {Context as AuthContext} from "../context/AuthContext";

const AccountScreen = () => {
    const { logout } = useContext(AuthContext);
    return(
        <SafeAreaView forceInset={{top:'always'}} >
            <Text style={styles.text}>Account Screen</Text>
            <Spacer>
                <Button title="Logout" onPress={() => logout()} />
            </Spacer>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
});

export default AccountScreen;
