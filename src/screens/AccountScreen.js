import React, {useContext} from "react";
import {View,Text,StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const AccountScreen = () => {
    const { logout } = useContext(AuthContext);
    return(
        <>
            <Text style={styles.text}>Account Screen</Text>
            <Spacer>
                <Button title="Logout" onPress={() => logout} />
            </Spacer>
            
        </>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
});

export default AccountScreen;
