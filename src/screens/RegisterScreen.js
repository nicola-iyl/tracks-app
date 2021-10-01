import React, {useState, useContext} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const RegisterScreen = ({navigation}) => {

    const {state,register} = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    return(
        <View style={styles.container}>
            <Spacer>
                <Text h3>Register Screen</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={(newEmail) => {setEmail(newEmail)}}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            { state.errorMessage ? <Text style={ styles.errorMessage }>{ state.errorMessage }</Text> : null }
            <Spacer>
                <Button title="Registrati" onPress={()=> register({email,password})} />
            </Spacer>

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
    errorMessage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15
    }
});

export default RegisterScreen;
