import React, { useContext } from "react";
import {View, StyleSheet} from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const RegisterScreen = ({navigation}) => {

    const {state,register,clearErrorMessage} = useContext(AuthContext);
    
    

    return(
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus = { () => clearErrorMessage() } //posso anche scrivere onWillBlur = { clearErrorMessage }
            />
            <AuthForm 
                headerText="Registrati per Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Registrati"
                onSubmit={({email,password}) => register({email,password})}

            />
                        
            <NavLink 
                text="Hai già un account? Vai al Login!"
                routeName="Login"
            />
        </View>
    );
};

RegisterScreen.navigationOptions = () =>{
    return{
        headerShown : false
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    
});

export default RegisterScreen;
