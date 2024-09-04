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

export function MapModal({
  isVisible,
  location,
  origin,
  setOrigin,
  handleMapPress,
  toggleModal,
  onSelectAddress,
}) {
  const [address, setAddress] = useState("");
  const refInput = useRef();
  const animation = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  const getAddressFromCoordinates = async (coords) => {
    try {
      const geocode = await Location.reverseGeocodeAsync(coords);
      if (geocode.length > 0) {
        const { street, city, region, postalCode } = geocode[0];
        return `${street}, ${city}, ${region} ${postalCode}`;
      }
    } catch (error) {
      console.error("Error al obtener la dirección:", error);
      return "Dirección no disponible";
    }
  };

  const handleMarkerDragEnd = async (e) => {
    const newCoords = e.nativeEvent.coordinate;
    setOrigin(newCoords);
    const newAddress = await getAddressFromCoordinates(newCoords);
    setAddress(newAddress);
  };

  useEffect(() => {
    if (origin) {
      getAddressFromCoordinates(origin).then((addr) => setAddress(addr));
    }
  }, [origin]);

  const handleSelectAddress = () => {
    if (onSelectAddress) {
      onSelectAddress(address);
    }
    resetAddress();
    toggleModal();
  };

  const resetAddress = () => {
    setAddress("");
    setOrigin(null);
  };

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

  return (
    <Modal style={{ padding: 0, margin: 0 }} isVisible={isVisible}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {location ? (
          <>
            <View
              style={{
                position: "absolute",
                top: 20,
                left: 10,
                right: 10,
                zIndex: 1,
              }}
            >
              <View
                style={{
                  height: 50,
                  borderRadius: 60,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => setToggle(!toggle)}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#CEDC39",
                    borderWidth: 1.5,
                    borderColor: "#fff",
                    zIndex: 10,
                  }}
                >
                  <View style={{ width: 30, height: 30 }}>
                    {getIconById("iconoLupaWhite")}
                  </View>
                </TouchableOpacity>

                <Animated.View
                  style={[
                    {
                      height: 50,
                      backgroundColor: "#CEDC39",
                      borderRadius: 60,
                      marginLeft: -50,
                      justifyContent: "center",
                      paddingLeft: 60,
                    },
                    animatedStyles,
                  ]}
                >
                  <TextInput
                    ref={refInput}
                    value={text}
                    onChangeText={setText}
                    selectionColor={"#fff"}
                    placeholder="Comienza a buscar..."
                    placeholderTextColor={"rgba(255,255,255,0.5)"}
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#fff",
                      height: "100%",
                    }}
                  />
                </Animated.View>
              </View>
            </View>

            <MapView
              style={{ flexGrow: 1 }}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              onPress={handleMapPress}
            >
              <Marker
                draggable
                coordinate={location}
                onDragEnd={handleMarkerDragEnd}
              />
            </MapView>

            <View
              style={{
                position: "absolute",
                bottom: 30,
                left: 10,
                right: 150,
                backgroundColor: "#F5F5F5",
                padding: 12,
                borderRadius: 5,
                zIndex: 1,
              }}
            >
              <StyledText graySilver font12pt>
                {address || "Drag the marker to get the address"}
              </StyledText>
            </View>

            <TouchableOpacity
              onPress={handleSelectAddress}
              style={{
                position: "absolute",
                bottom: 30,
                left: 260,
                right: 15,
                backgroundColor: "#CEDC39",
                paddingVertical: 20,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <StyledText font12pt regularWhite>
                Select Address
              </StyledText>
            </TouchableOpacity>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="#CEDC39" />
          </View>
        )}
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            position: "absolute",
            top: 40,
            right: 20,
            width: 20,
            height: 20,
          }}
        >
          {getIconById("iconClose")}
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
