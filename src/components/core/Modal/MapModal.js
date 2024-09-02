import React from "react";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import MapView, { Marker } from "react-native-maps";
import StyledText from "../../../utils/globalstyle";

export function MapModal({ isVisible, location, origin, setOrigin, handleMapPress, toggleModal }) {
    return (
        <Modal style={{ padding: 0, margin: 0 }} isVisible={isVisible}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                {location ? (
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
                            onDragEnd={(direction) =>
                                setOrigin(direction.nativeEvent.coordinate)
                            }
                        />
                    </MapView>
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
                    style={{ position: "absolute", top: 40, right: 20 }}
                >
                    <StyledText>Close</StyledText>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}
