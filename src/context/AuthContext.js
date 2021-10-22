import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type){
        case 'login':
            return {errorMessage:'', token:action.payload };
        case 'add_error':
            return {...state, errorMessage: action.payload };
        case 'clear_error_msg':
            return {...state, errorMessage: ''};
        case 'logout':
            return {token:null,errorMessage:''};
        default:
            return state;
    }
};

const logout = (dispatch) => {

    return async () => {
        try{
            await AsyncStorage.removeItem('token');
            dispatch({type:'logout'});
            navigate('loginFlow');
        }catch(err){
            console.log(err.message);
        }
        
    };
};

/*const register = (dispatch) => {
    return async ({email,password}) => {
        // faccio un API request per Registrarsi con questa email e password
        try{
            const response = await trackerApi.post('/signup',{ email, password });
            //console.log(response.data);
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'login',payload:response.data.token});
        }catch(err){
            //console.log(err.message);
            dispatch({type:'add_error', payload: "Error: Something went wrong!"});
        }
        // se ho successo modificao il mio stato e dico che sono autenticato

        // se la registrazione fallisce restituisco un messaggio di errore da qualche parte
    };
};*/

const register = dispatch => async ({email,password}) => {
    // faccio un API request per Registrarsi con questa email e password
    try{
        //console.log(email);
        //console.log(password);
        const response = await trackerApi.post('/signup',{ email, password });
        //console.log(response.data);
        await AsyncStorage.setItem('token',response.data.token);
        dispatch({type:'login', payload:response.data.token});
        navigate('TrackList');
    }catch(err){
        //console.log(err.message);
        dispatch({type:'add_error', payload: "Error: Something went wrong!"});
    }
    // se ho successo modificao il mio stato e dico che sono autenticato

    // se la registrazione fallisce restituisco un messaggio di errore da qualche parte
};

const login = (dispatch) => {
    return async ({email, password}) => {
        
        try{
            const response = await trackerApi.post('/signin',{ email, password });
            
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'login', payload:response.data.token});
            navigate('TrackList');
        }
        catch(err){
            console.log(err.message);
            dispatch({type:'add_error', payload: "Error: Something went wrongs!"});
        }
    };
};

const isGiaLoggato = dispatch => async() => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type:'login',payload:token});
        navigate('TrackList');
    }
    else{
        navigate('Login');
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch( {type:'clear_error_msg'} );
    }
    
}



export const {Provider, Context} = createDataContext(
    authReducer,
    {register, login, logout, clearErrorMessage, isGiaLoggato},
    { token : null, errorMessage : ''}
);
