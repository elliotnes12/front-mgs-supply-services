import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";
import React, { useState } from "react";
import { default as CalendarRange } from "../../components/DatePicker";

import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import { Header } from "../../components/core/Header";
import { useLocation } from "../../contexts";
import { stylesGlobal } from "../../modules/styles/global.style";
import StyledText, {
  StyledGradientButton,
  StyledGradientButtonSmall
} from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { styles, themeCalendar } from "./styles/CreateService.style";

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
  const [bussinessName, setBussinessName] = useState(
    "CORPORATION VILLA NUEVA LLC"
  );

  const [filteredEmployees, setFilteredEmployees] = useState(dataEmployees);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(
    "Aquí va la dirección"
  );
  const [mapClicked, setMapClicked] = useState(false);
  const { location } = useLocation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isModalCalendar, setIsModalCalendar] = useState(false)
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState('cleaning');


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) {
      setMapClicked(false);
    }
  };


  const toggleModalCalendar = () => {
    setIsModalVisible(!isModalCalendar);
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

  const handleDateChange = (date) => {
    setSelectedDate(date.dateString);
    setIsCalendarVisible(false);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Choose a date";
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const showTimePicker = () => {
    setIsTimePickerVisible(true);
  };

  const formatTime = (date) => {
    if (!date) return "Schedule";
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };


  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <ScrollView>
        <Header
          title={"Create a Service"}
          subtitle={"Schedule a service with us"}
          goBack={true}
        />
        <View style={styles.categories}>
          <StyledGradientButtonSmall
            action={() => handleButtonPress("cleaning")}
            focused={selectedButton === "cleaning"}
            text={"cleaning"}
          />

          <StyledGradientButtonSmall
            action={() => handleButtonPress("painting")}
            focused={selectedButton === "painting"}
            text={"painting"}
          />

          <StyledGradientButtonSmall
            action={() => handleButtonPress("polishing")}
            focused={selectedButton === "polishing"}
            text={"polishing"}
          />


        </View>


        <View>
          <View style={{ marginTop: 20, paddingHorizontal: 24 }}>
            <StyledText bold>Set date & time</StyledText>

            <TouchableOpacity
              style={[styles.item, { backgroundColor: "#FAFAFA" }]}
              onPress={toggleCalendarVisibility}
            >
              <View style={{ width: 30, height: 30, marginRight: 10, }}>
                {getIconById("iconCalendar")}
              </View>
              <StyledText font16pt>{formatDate(selectedDate)}</StyledText>
            </TouchableOpacity>


            <TouchableOpacity
              style={[styles.item, { backgroundColor: "#FAFAFA" }]}
              onPress={showTimePicker}
            >
              <View style={{ width: 30, height: 30, marginRight: 10 }}>
                {getIconById("icontime")}
              </View>
              <StyledText font16pt>{formatTime(selectedTime)}</StyledText>
            </TouchableOpacity>


            <TouchableOpacity
              style={[styles.item, { backgroundColor: "#FAFAFA" }]}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 15,
                  marginLeft: 7,
                }}
              >
                {getIconById("iconlupa")}
              </View>
              <StyledText font16pt>Search employee</StyledText>
            </TouchableOpacity>
            <View style={styles.employees}>
              <Text style={[styles.titleServices, { marginBottom: 5 }]}>
                Employees
              </Text>
            </View>
            <StyledText
              font16pt
              style={[styles.textGray, styles.titleServices]}
            >
              Service Location
            </StyledText>
            <View style={[styles.item, stylesGlobal.itemVertical]}>
              <Text>{selectedAddress}</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.street__googleMaps}>SET GOOGLE MAP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bussiness}>
              <Text style={styles.bussiness__title}>Bussiness Details</Text>
              <Text font16pt style={[styles.textGray, styles.titleServices]}>
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

          <Modal isVisible={isModalCalendar}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <CalendarRange />

              <StyledGradientButton text={"Confirm"} action={() => console.log("confirm")} />

            </View>

          </Modal>


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
        </View>
      </ScrollView>
    </>
  );
}
