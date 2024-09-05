import React, { createContext, useState, useEffect } from "react";
import * as Location from "expo-location";
import { ENV } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [origin, setOrigin] = useState(null);
  const [loading, setLoading] = useState(true);

  const DEFAULT_LOCATION = {
    latitude: 30.2672,
    longitude: -97.7431,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const saveLocationToStorage = async (location) => {
    await AsyncStorage.setItem(
      ENV.LOCATION.CURRENT_LOCATION,
      JSON.stringify(location)
    );
  };

  const getLocationFromStorage = async () => {
    const location = await AsyncStorage.getItem(ENV.LOCATION.CURRENT_LOCATION);
    return location ? JSON.parse(location) : null;
  };

  const fetchLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        setOrigin(DEFAULT_LOCATION);
        setLoading(false);
        return;
      }

      const timeoutId = setTimeout(async () => {
        const storedLocation = await getLocationFromStorage();
        if (storedLocation) {
          setOrigin(storedLocation);
        } else {
          setOrigin(DEFAULT_LOCATION);
        }
        setLoading(false);
      }, 10000);

      const currentLocation = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        accuracy: Location.Accuracy.High,
      });

      clearTimeout(timeoutId);

      const newOrigin = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setOrigin(newOrigin);
      saveLocationToStorage(newOrigin);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching location:", error);
      setOrigin(DEFAULT_LOCATION);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ origin, loading }}>
      {children}
    </LocationContext.Provider>
  );
}
