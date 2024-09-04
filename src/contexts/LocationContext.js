import React, { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const LocationContext = createContext();

export function LocationProvider({ children }) {
    const [origin, setOrigin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let { status } = await Location.requestForegroundPermissionsAsync({
                    accuracy: Location.Accuracy.High,

                    enableHighAccuracy: true
                });
                if (status !== 'granted') {
                    console.error("Permission to access location was denied");
                    setLoading(false);
                    return;
                }

                let currentLocation = await Location.getCurrentPositionAsync({
                    enableHighAccuracy: true,
                    accuracy: Location.Accuracy.High,
                });
                setOrigin({
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                });
            } catch (error) {
                setOrigin({
                    latitude: 30.2672,
                    longitude: -97.7431,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                });

            }
        })();
    }, []);

    return (
        <LocationContext.Provider value={{ origin, loading }}>
            {children}
        </LocationContext.Provider>
    );
}
