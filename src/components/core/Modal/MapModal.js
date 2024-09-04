import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Animated,
  Keyboard,
} from "react-native";
import Modal from "react-native-modal";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import StyledText from "../../../utils/globalstyle";
import { getIconById } from "../../../utils/util";
import { useLocation } from "../../../modules/Auth/hooks";
import { styles } from "./MapModal.styles";

export function MapModal({
  isVisible,
  toggleModal,
}) {
  const [address, setAddress] = useState("");
  const refInput = useRef();
  const animation = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const { origin, loading } = useLocation();
  const [coords, setCoords] = useState(undefined)


  const getAddressFromCoordinates = async (coords) => {
    console.log("Cuales son las cordenadas")
    console.log(coords)
    try {
      const geocode = await Location.reverseGeocodeAsync(coords);
      console.log(geocode)
      if (geocode.length > 0) {
        const { street, city, region, postalCode } = geocode[0];
        return `${street}, ${city}, ${region} ${postalCode}`;
      }

    } catch (error) {
      console.error("Error al obtener la dirección:", error);
    }
  };

  const handleMarkerDragEnd = (e) => {

    (async () => {

      const newCoords = e.nativeEvent.coordinate;
      setCoords(newCoords);
      const newAddress = await getAddressFromCoordinates(newCoords);
      setAddress(newAddress);
    })()
  };

  useEffect(() => {

    (async () => {

      if (origin) {
        setCoords(origin)
        const newAddress = await getAddressFromCoordinates(origin);
        setAddress(newAddress);
      }

      console.log(origin)
    })()

  }, [origin]);

  const handleAnimated = () => {
    Animated.timing(animation, {
      toValue: toggle ? 1 : 0,
      duration: 550,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (toggle) {
      refInput.current.focus();
    } else {
      Keyboard.dismiss();
    }
    handleAnimated();
  }, [toggle]);

  const animatedStyles = {
    width: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "80%"],
      extrapolate: "clamp",
    }),
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };


  const handleAddressSelect = (address) => {
  };

  const handleMapPress = async (e) => {
    if (!mapClicked) {
      setMapClicked(true);

      const { latitude, longitude } = e.nativeEvent.coordinate;

      try {
        const geocode = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (geocode.length > 0) {
          const { street, city, region, postalCode } = geocode[0];
          const address = `${street}, ${city}, ${region} ${postalCode}`;

          setSelectedAddress(address);
          toggleModal();
        }
      } catch (error) {
        console.error("Error al obtener la dirección:", error);
      }
    }
  };


  return (
    <Modal style={styles.modalContainer} isVisible={isVisible}>
      <View style={styles.container}>
        {coords ? (
          <>
            <View style={{ flex: 7 }}>

              <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                <TouchableOpacity
                  onPress={() => setToggle(!toggle)}
                    style={styles.searchButton}
                >
                    <View style={styles.searchIcon}>
                    {getIconById("iconoLupaWhite")}
                  </View>
                </TouchableOpacity>

                  <Animated.View style={[styles.animatedSearch, animatedStyles]}>
                  <TextInput
                    ref={refInput}
                    value={text}
                    onChangeText={setText}
                    selectionColor={"#fff"}
                    placeholder="Comienza a buscar..."
                    placeholderTextColor={"rgba(255,255,255,0.5)"}
                      style={styles.searchInput}
                  />
                </Animated.View>
              </View>
            </View>

            <MapView
                style={styles.mapView}
              initialRegion={{
                latitude: coords?.latitude,
                longitude: coords?.longitude,
                latitudeDelta: coords?.latitudeDelta,
                longitudeDelta: coords?.longitudeDelta,
              }}
              onPress={handleMapPress}
            >
              <Marker
                draggable
                  coordinate={coords}
                onDragEnd={handleMarkerDragEnd}
              />
            </MapView>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>

              <View style={styles.addressContainer}>
              <StyledText graySilver font12pt>
                {address || "Drag the marker to get the address"}
              </StyledText>
            </View>

            <TouchableOpacity
                onPress={handleAddressSelect}
                style={styles.selectAddressButton}
            >
                <View>
                  {getIconById("iconClose")}
                </View>
            </TouchableOpacity>
            </View>

          </>
        ) : (
            <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#CEDC39" />
          </View>
        )}
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
          {getIconById("iconClose")}
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

