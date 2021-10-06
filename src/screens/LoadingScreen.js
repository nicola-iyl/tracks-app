import React, {useContext,useEffect} from "react";
import {Context as AuthContext} from "../context/AuthContext";

const LoadingScreen = () =>{
    const {isGiaLoggato} = useContext(AuthContext);

    useEffect(()=>{
        isGiaLoggato();
    },[]);

    return null;
};

export default LoadingScreen;