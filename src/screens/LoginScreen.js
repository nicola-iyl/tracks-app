import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
    const {state,login, clearErrorMessage} = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus = { () => clearErrorMessage() } //posso anche scrivere onWillBlur = { clearErrorMessage }
            />
            <AuthForm 
                headerText="Login per Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Login"
                onSubmit={({email,password}) => login({email,password})}  //posso anche scrivere onSubmit={login}

            />
                        
            <NavLink 
                text="Non hai un account? Vai alla registrazione!"
                routeName="Register"
            />
        </View>
    );
};

LoginScreen.navigationOptions = () =>{
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

export default LoginScreen;
