import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";
import React, { useState } from "react";
import { default as CalendarRange } from "../../components/DatePicker";

import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import { Header } from "../../components/core/Header";
import EmployeeSelectorModal from "../../components/core/Modal/EmployeeSelectorModal";
import { useLocation } from "../../contexts";
import StyledText, {
  StyledGradientButton,
  StyledGradientButtonSmall
} from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { styles } from "./styles/CreateService.style";
import { MapModal } from "../../components/core/Modal/MapModal";

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
    ""
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(
    "Aquí va la dirección"
  );
  const [mapClicked, setMapClicked] = useState(false);
  const { location } = useLocation();
  const [isModalCalendar, setIsModalCalendar] = useState(false)
  const [selectedButton, setSelectedButton] = useState('Cleaning');
  const [assignedEmployees, setAssignedEmployees] = useState([])
  const timeOptions = [
    { id: "1", icon: "iconCalendar", label: "Choose a Date", callback: () => console.log("") },
    { id: "2", icon: "icontime", label: "Choose a Time", callback: () => console.log("") },
    { id: "3", icon: "iconlupa", label: "Assign Employee", callback: () => handleOpenModal() },
  ];

  const [modalEmployeeVisible, setModalEmployeeVisible] = useState(false);

  const handleOpenModal = () => {
    setModalEmployeeVisible(true);
  };

  const handleCloseModal = () => {
    setModalEmployeeVisible(false);
  };

  const handleConfirmSelection = (selected) => {
    setAssignedEmployees(selected)
  };


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


  const confirmDate = () => {
    toggleModalCalendar();
  }
  const toggleModalCalendar = () => {
    setIsModalCalendar(prevStatus => !prevStatus)
  }

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <Header
          title={"Create a Service"}
          subtitle={"Schedule a service with us"}
          goBack={true}
        />



        <View style={{ paddingTop: 20, paddingHorizontal: 24 }}>

          <View style={{ marginVertical: 15 }}>
            <StyledText font17pt neutralGray bold>Select a service</StyledText>
          </View>

          <View style={styles.categories}>
            <StyledGradientButtonSmall
              action={() => handleButtonPress("Cleaning")}
              focused={selectedButton === "Cleaning"}
              text={"Cleaning"}
            />

            <StyledGradientButtonSmall
              action={() => handleButtonPress("Painting")}
              focused={selectedButton === "Painting"}
              text={"Painting"}
            />

            <StyledGradientButtonSmall
              action={() => handleButtonPress("Polishing")}
              focused={selectedButton === "Polishing"}
              text={"Polishing"}
          />


        </View>

          <View style={{ marginVertical: 15 }}>
            <StyledText font17pt neutralGray bold>Set date & time</StyledText>
          </View>


          {timeOptions.map((item) => (
            <TouchableOpacity
              onPress={item.callback}
              key={item.id}
              style={[{ backgroundColor: "#FAFAFA", marginBottom: 10, borderRadius: 10 }]}
            >
              <View style={[styles.item, { paddingLeft: 15 }]}>
                <View style={{ width: 30, height: 30, marginRight: 10 }}>
                  {getIconById(item.icon)}
              </View>
                <StyledText graySilver font16pt>{item.label}</StyledText>
              </View>
            </TouchableOpacity>
          ))}



          <View style={{ marginVertical: 15 }}>
            <StyledText font17pt neutralGray bold>Employees</StyledText>
          </View>

          <View>

            {assignedEmployees.length > 0 &&

              assignedEmployees.map((item) => (
                <View
                  key={item.id}
                  style={[{
                    backgroundColor: "#FAFAFA",
                    marginBottom: 10, borderRadius: 10
                  }]}>

                  <View style={[styles.item, { paddingLeft: 15 }]}>
                    <View style={styles.avatarAssingEmployee}>
                      {getIconById("iconAvatar")}
                    </View>
                    <StyledText graySilver font16pt>{item.name}</StyledText>
                  </View>
                </View>
              ))

            }
            {assignedEmployees.length == 0 &&
              <View
                style={[{
                  backgroundColor: "#FAFAFA",
                  marginBottom: 10, borderRadius: 10,
                  paddingVertical: 15
                }]}>

                <View style={[{ paddingLeft: 15 }]}>
                  <StyledText graySilver font16pt>No Employees Assigned</StyledText>
                </View>
              </View>
            }

          </View>


          <View style={{ marginVertical: 15 }}>
            <StyledText font17pt neutralGray bold>Service Location</StyledText>
          </View>

          <View
            style={[{
              backgroundColor: "#FAFAFA",
              marginBottom: 10, borderRadius: 10,
              paddingVertical: 15
            }]}>

            <View style={[{ paddingLeft: 15 }, styles.item]}>
              <View style={{ flex: 2 }}>
                <StyledText graySilver font16pt>{selectedAddress}</StyledText>
              </View>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.street__googleMaps}>SET GOOGLE MAP</Text>
              </TouchableOpacity>
            </View>
          </View>

            <View style={styles.bussiness}>
            <StyledText font17pt bold >Bussiness Details</StyledText>

            <TouchableOpacity
              style={[{ backgroundColor: "#FAFAFA", marginBottom: 10, borderRadius: 10 }]}
            >
              <View style={[styles.item, { paddingLeft: 15 }]}>
                <View style={{ width: 30, height: 30, marginRight: 10 }}>
                  {getIconById("iconlupa")}
                </View>
                <StyledText graySilver font16pt>Assing Customer</StyledText>
              </View>
            </TouchableOpacity>



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


          <Modal isVisible={isModalCalendar}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <CalendarRange />

              <StyledGradientButton text={"Confirm"} action={() => confirmDate()} />

            </View>

          </Modal>

          <EmployeeSelectorModal
            visible={modalEmployeeVisible}
            onClose={handleCloseModal}
            onConfirm={handleConfirmSelection}
          />

          <MapModal
            isVisible={isModalVisible}
            location={location}
            origin={origin}
            setOrigin={setOrigin}
            handleMapPress={handleMapPress}
            toggleModal={toggleModal}
          />
        </View>
      </ScrollView>
    </>
  );
}
