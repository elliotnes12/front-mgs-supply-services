import React, { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import { assets } from "../../assets";
import { styles } from "./styles/CreateService.style";
import { getIconById } from "../../utils/util";
import { Header } from "../../components/core/Header";
import StyledText from "../../utils/globalstyle";
import { stylesGlobal } from "../../modules/styles/global.style";
import { useLocation } from "../../contexts";


const data = [
  { id: "1", title: "Cleaning" },
  { id: "2", title: "Painting" },
  { id: "3", title: "Polishing" },
];

const dataEmployees = [
  { id: "1", name: "Elliot Guillermo Garcia Montoya" },
  { id: "2", name: "Nazario Perez Lopez" },
];

export function CreateService() {


  const [selectedId, setSelectedId] = useState(data[0].id);
  const [bussinessName, setBussinessName] = useState("CORPORATION VILLA NUEVA LLC");
  const [searchText, setSearchText] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(dataEmployees);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("Aquí va la dirección");
  const [mapClicked, setMapClicked] = useState(false);
  const { location, loading } = useLocation(); // Obtiene la ubicación y el estado de carga


  console.log(location)
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) {
      setMapClicked(false);
    }
  };

  const handleMapPress = async (e) => {
    if (!mapClicked) {
      setMapClicked(true);

      const { latitude, longitude } = e.nativeEvent.coordinate;

      try {
        const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });

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



  const getImage = (label) => {
    if (label === "Cleaning") {
      return assets.image.png.iconEscoba;
    } else if (label === "Painting") {
      return assets.image.png.iconBotePintura;
    } else if (label === "Polishing") {
      return assets.image.png.iconBotePintura;
    }
  };

  const handleSearch = () => {
    const results = dataEmployees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
        employee.id.includes(searchText)
    );
    setFilteredEmployees(results);
  };

  return (
    <>
      <Header goBack={true} title={"Create a Service"} subtitle={"Create of the generated services"} />

      <ScrollView>
        <View>
          <View style={{ marginTop: 20, paddingHorizontal: 24 }}>
            <Text style={[styles.titleServices]}>
              Set date & time
            </Text>
            <TouchableOpacity style={styles.item}>
              <View style={{ width: 40, height: 40, marginRight: 10 }}>
                {getIconById("calendar")}
              </View>
              <Text>Choose a date</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <View style={{ width: 40, height: 40, marginRight: 10 }}>
                {getIconById("calendar")}
              </View>
              <Text>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 15,
                  marginLeft: 7,
                }}
              >
                {getIconById("iconLupa")}
              </View>
              <Text>Search by name or id employee</Text>
            </TouchableOpacity>
            <View style={styles.employees}>
              <Text style={[styles.titleServices, { marginBottom: 5 }]}>
                Employees
              </Text>
            </View>
            <Text style={[styles.textGray, styles.titleServices]}>
              Service Location
            </Text>
            <View style={[styles.item, stylesGlobal.itemVertical]}>
              <Text>{selectedAddress}</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.street__googleMaps}>SET GOOGLE MAP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bussiness}>
              <Text style={styles.bussiness__title}>Bussiness Details</Text>
              <Text style={[styles.textGray, styles.titleServices]}>
                Bussiness Name
              </Text>
              <Text style={styles.bussiness__name}>{bussinessName}</Text>

              <Text style={[styles.textGray, styles.titleServices]}>
                Additional Message
              </Text>
              <TextInput
                style={styles.textArea}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setBussinessAdditional(text)}
                placeholder="Enter your text here"
              />
            </View>
            <View style={styles.submit}>
              <TouchableOpacity>
                <LinearGradient
                  colors={["#CEDC39", "#7DA74D"]}
                  style={styles.button}
                >
                  <Text style={styles.button__text}>Appoinment a Service</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <Modal style={{ padding: 0, margin: 0 }} isVisible={isModalVisible}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
              {location && (
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
              )}
              {!location && (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
        </View>
      </ScrollView>
    </>
  );
}
