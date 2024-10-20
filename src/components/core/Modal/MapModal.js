import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import { useLocation } from "../../../modules/Auth/hooks";
import StyledText from "../../../utils/globalstyle";
import { theme } from "../../../utils/theme";
import { getIconById } from "../../../utils/util";
import {
  getAddressFromCoordinates,
  handleMapPress,
  handleMarkerDragEnd
} from "./mapFunctions";
import { styles } from "./styles/MapModal.styles";

const preloadedAddresses = [
  { id: 1, city: 'New York', state: 'NY', latitude: 40.7128, longitude: -74.0060 },
  { id: 2, city: 'Los Angeles', state: 'CA', latitude: 34.0522, longitude: -118.2437 },
  { id: 3, city: 'Chicago', state: 'IL', latitude: 41.8781, longitude: -87.6298 },
  { id: 4, city: 'Houston', state: 'TX', latitude: 29.7604, longitude: -95.3698 },
  { id: 5, city: 'Phoenix', state: 'AZ', latitude: 33.4484, longitude: -112.0740 },
  { id: 6, city: 'Philadelphia', state: 'PA', latitude: 39.9526, longitude: -75.1652 },
  { id: 7, city: 'San Antonio', state: 'TX', latitude: 29.4241, longitude: -98.4936 },
  { id: 8, city: 'San Diego', state: 'CA', latitude: 32.7157, longitude: -117.1611 },
  { id: 9, city: 'Dallas', state: 'TX', latitude: 32.7767, longitude: -96.7970 },
  { id: 10, city: 'San Jose', state: 'CA', latitude: 37.3382, longitude: -121.8863 },
  { id: 11, city: 'Austin', state: 'TX', latitude: 30.2672, longitude: -97.7431 },
  { id: 12, city: 'Jacksonville', state: 'FL', latitude: 30.3322, longitude: -81.6557 },
  { id: 13, city: 'Fort Worth', state: 'TX', latitude: 32.7555, longitude: -97.3308 },
  { id: 14, city: 'Columbus', state: 'OH', latitude: 39.9612, longitude: -82.9988 },
  { id: 15, city: 'Charlotte', state: 'NC', latitude: 35.2271, longitude: -80.8431 },
  { id: 16, city: 'San Francisco', state: 'CA', latitude: 37.7749, longitude: -122.4194 },
  { id: 17, city: 'Indianapolis', state: 'IN', latitude: 39.7684, longitude: -86.1581 },
  { id: 18, city: 'Seattle', state: 'WA', latitude: 47.6062, longitude: -122.3321 },
  { id: 19, city: 'Denver', state: 'CO', latitude: 39.7392, longitude: -104.9903 },
  { id: 20, city: 'Washington', state: 'DC', latitude: 38.9072, longitude: -77.0369 },
  { id: 21, city: 'Boston', state: 'MA', latitude: 42.3601, longitude: -71.0589 },
  { id: 22, city: 'El Paso', state: 'TX', latitude: 31.7619, longitude: -106.4850 },
  { id: 23, city: 'Nashville', state: 'TN', latitude: 36.1627, longitude: -86.7816 },
  { id: 24, city: 'Detroit', state: 'MI', latitude: 42.3314, longitude: -83.0458 },
  { id: 25, city: 'Oklahoma City', state: 'OK', latitude: 35.4676, longitude: -97.5164 },
  { id: 26, city: 'Las Vegas', state: 'NV', latitude: 36.1699, longitude: -115.1398 },
  { id: 27, city: 'Memphis', state: 'TN', latitude: 35.1495, longitude: -90.0490 },
  { id: 28, city: 'Louisville', state: 'KY', latitude: 38.2527, longitude: -85.7585 },
  { id: 29, city: 'Baltimore', state: 'MD', latitude: 39.2904, longitude: -76.6122 },
  { id: 30, city: 'Milwaukee', state: 'WI', latitude: 43.0389, longitude: -87.9065 }
];


export function MapModal({ isVisible, toggleModal, setSelectedAddress }) {
  const [address, setAddress] = useState("");
  const refInput = useRef();
  const mapRef = useRef(null);
  const animation = useRef(new Animated.Value(-300)).current; // Animación del buscador
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const { origin, loading } = useLocation();
  const [coords, setCoords] = useState(undefined);
  const [mapClicked, setMapClicked] = useState(false);

  useEffect(() => {
    console.log("Modal visibility changed:", isVisible);
  }, [isVisible]);

  useEffect(() => {
    (async () => {
      try {
        if (origin) {
          setCoords(origin);
          const newAddress = await getAddressFromCoordinates(origin);
          setAddress(newAddress);
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [origin]);

  const toggleSearch = () => {
    if (toggle) {
      Animated.timing(animation, {
        toValue: -300,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setToggle(false));
    } else {
      setToggle(true);
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const onEndEditing = () => {
    const filtered = preloadedAddresses.filter(item =>
      `${item.city}, ${item.state}`.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAddresses(filtered);
  };
  const selectAddress = (item) => {
    const newCoords = { latitude: item.latitude, longitude: item.longitude };
    setCoords(newCoords);

    mapRef.current.animateToRegion({
      ...newCoords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });

    setText(`${item.city}, ${item.state}`);
    setFilteredAddresses([]);

    toggleSearch();
  };
  return (
    <Modal style={styles.modalContainer} animationType="slide" isVisible={isVisible}>
      <View style={styles.container}>
        {coords != undefined ? (
          <>
            <View style={{ height: 60, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: theme.gradient.color1 }}>
              <TouchableOpacity onPress={toggleSearch} style={{ marginLeft: 10, width: 35, height: 35 }}>
                {getIconById("iconoLupaWhite")}
              </TouchableOpacity>
              {!toggle && (
                <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                  {getIconById("iconClose")}
                </TouchableOpacity>
              )}
            </View>

            {toggle && (
              <Animated.View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: [{ translateX: animation }],
                  zIndex: 1,
                  height: 60,
                }}
              >
                <View style={{ padding: 10, backgroundColor: theme.gradient.color1, flexDirection: "row", alignItems: "center", paddingTop: 15 }}>
                  <TouchableOpacity onPress={toggleSearch} style={{ width: 35, height: 35, marginRight: 10 }}>
                    {getIconById("iconLeftArrow")}
                  </TouchableOpacity>
                  <TextInput
                    style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, width: "85%" }}
                    placeholder="Search..."
                    value={text}
                    onEndEditing={onEndEditing}
                    onChangeText={setText}
                    autoFocus
                  />
                </View>

                {filteredAddresses.length > 0 && (
                  <View style={styles.suggestionsContainer}>
                    <FlatList
                      data={filteredAddresses}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.suggestionItem}
                          onPress={() => selectAddress(item)}
                        >
                          <Text>{`${item.city}, ${item.state}`}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                )}
              </Animated.View>
            )}

            <View style={{ flex: 7 }}>
              <MapView
                ref={mapRef}
                style={styles.mapView}
                initialRegion={
                  coords
                    ? {
                      latitude: coords.latitude,
                      longitude: coords.longitude,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }
                    : {
                      latitude: 30.2672,
                      longitude: -97.7431,
                      latitudeDelta: 0.1,
                      longitudeDelta: 0.1,
                    }
                }
                onPress={(e) => handleMapPress(e, setSelectedAddress, setMapClicked)}
              >
                <Marker
                  draggable
                  coordinate={coords}
                  onDragEnd={(e) => handleMarkerDragEnd(e, setCoords, setAddress)}
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
                onPress={() => {
                  setSelectedAddress(address);
                  toggleModal();
                }}
                style={styles.selectAddressButton}
              >
                <View>{getIconById("iconArrowRight")}</View>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#CEDC39" />
          </View>
        )}
      </View>
    </Modal>
  );
}
