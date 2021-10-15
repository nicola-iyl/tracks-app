import { useState, useEffect } from "react";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (callback) => {
    const [err, setErr] = useState(null);



    const startWatching = async ()=>{
        try{
            const { granted } = await requestForegroundPermissionsAsync();
            if(!granted){
                console.log('non consentito');
                throw new Error('Location permission not granted');
            }
            await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                callback
            );
        }catch(e){
            console.log('non consentito b');
            setErr(e);
        }
    }

    useEffect(()=>{
        startWatching();
    },[]);

    return [err];
};