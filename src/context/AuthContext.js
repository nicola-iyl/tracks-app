import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type){
        case 'login':
            return {errorMessage:'', token:action.payload };
        case 'add_error':
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
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
    return ({email, password}) => {

    };
};

const logout = (dispatch) => {
    return () => {

    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {register, login, logout},
    { token : null, errorMessage : ''}
);
