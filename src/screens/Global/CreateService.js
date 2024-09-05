import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { default as CalendarRange } from "../../components/DatePicker";

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Header } from "../../components/core/Header";
import EmployeeSelectorModal from "../../components/core/Modal/EmployeeSelectorModal";
import { MapModal } from "../../components/core/Modal/MapModal";
import StyledText, {
  StyledGradientButton,
  StyledGradientButtonSmall,
} from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { styles } from "./styles/CreateService.style";
import { theme } from "../../utils/theme";

const data = [
  { id: "1", title: "Cleaning" },
  { id: "2", title: "Painting" },
  { id: "3", title: "Polishing" },
];

export function CreateService() {
  const [bussinessName, setBussinessName] = useState("");
  const [bussinessAdditional, setBussinessAdditional] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    "Aquí va la dirección"
  );
  const [mapClicked, setMapClicked] = useState(false);
  const [isModalCalendar, setIsModalCalendar] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Cleaning");
  const [assignedEmployees, setAssignedEmployees] = useState([]);
  const timeOptions = [
    {
      id: "1",
      icon: "iconCalendar",
      label: "Choose a Date",
      callback: () => setIsModalCalendar(true),
    },
    {
      id: "2",
      icon: "icontime",
      label: "Choose a Time",
      callback: () => console.log(""),
    },
    {
      id: "3",
      icon: "iconlupa",
      label: "Assign Employee",
      callback: () => handleOpenModal(),
    },
  ];

  const [modalEmployeeVisible, setModalEmployeeVisible] = useState(false);

  const handleOpenModal = () => {
    setModalEmployeeVisible(true);
  };

  const handleCloseModal = () => {
    setModalEmployeeVisible(false);
  };

  const handleConfirmSelection = (selected) => {
    setAssignedEmployees(selected);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) {
      setMapClicked(false);
    }
  };

  const confirmDate = () => {
    toggleModalCalendar();
  };
  const toggleModalCalendar = () => {
    setIsModalCalendar((prevStatus) => !prevStatus);
  };

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const unAssingEmployee = (id) => {
    const tempAssingedEmployees = assignedEmployees.filter(
      (element) => element.idEmployee != id
    );
    setAssignedEmployees(tempAssingedEmployees);
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
            <StyledText font17pt neutralGray bold>
              Select a service
            </StyledText>
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
            <StyledText font17pt neutralGray bold>
              Set date & time
            </StyledText>
          </View>

          {timeOptions.map((item) => (
            <TouchableOpacity
              onPress={item.callback}
              key={item.id}
              style={[
                {
                  backgroundColor: theme.colors.lightGray,
                  marginBottom: 10,
                  borderRadius: 10,
                },
              ]}
            >
              <View style={[styles.item, { paddingLeft: 15 }]}>
                <View style={{ width: 30, height: 30, marginRight: 10 }}>
                  {getIconById(item.icon)}
                </View>
                <StyledText graySilver font14pt regular>
                  {item.label}
                </StyledText>
              </View>
            </TouchableOpacity>
          ))}

          <View style={{ marginVertical: 15 }}>
            <StyledText font17pt neutralGray bold>
              Employees
            </StyledText>
          </View>

          <View>
            {assignedEmployees.length > 0 &&
              assignedEmployees.map((item) => (
                <View
                  key={item.idEmployee}
                  style={[
                    {
                      backgroundColor: theme.colors.lightGray,
                      marginBottom: 10,
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View style={[styles.item, { paddingLeft: 15 }]}>
                    <View style={[styles.item, { flex: 2 }]}>
                      <View style={styles.avatarAssingEmployee}>
                        {getIconById("iconAvatar")}
                      </View>

                      <StyledText graySilver font16pt>
                        {item.name} - {item.idEmployee}
                      </StyledText>
                    </View>
                    <TouchableOpacity
                      onPress={() => unAssingEmployee(item.idEmployee)}
                      style={styles.iconClose}
                    >
                      {getIconById("iconClose")}
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            {assignedEmployees.length == 0 && (
              <View
                style={[
                  {
                    backgroundColor: theme.colors.lightGray,
                    marginBottom: 10,
                    borderRadius: 10,
                    paddingVertical: 15,
                  },
                ]}
              >
                <View style={[{ paddingLeft: 15 }]}>
                  <StyledText graySilver font14pt regular>
                    No Employees Assigned
                  </StyledText>
                </View>
              </View>
            )}
          </View>

          <View style={{ marginVertical: 15 }}>
            <StyledText font17pt neutralGray bold>
              Service Location
            </StyledText>
          </View>

          <View
            style={[
              {
                backgroundColor: theme.colors.lightGray,
                marginBottom: 10,
                borderRadius: 10,
                paddingVertical: 15,
              },
            ]}
          >
            <View style={[{ paddingLeft: 15, minHeight: 70 }, styles.item]}>
              <View style={{ flex: 2 }}>
                <StyledText graySilver font16pt>
                  {selectedAddress}
                </StyledText>
              </View>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.street__googleMaps}>SET GOOGLE MAP</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bussiness}>
            <StyledText font17pt bold>
              Bussiness Details
            </StyledText>

            <TouchableOpacity
              style={[
                {
                  backgroundColor: "#FAFAFA",
                  marginBottom: 10,
                  borderRadius: 10,
                },
              ]}
            >
              <View style={[styles.item, { paddingLeft: 15 }]}>
                <View style={{ width: 30, height: 30, marginRight: 10 }}>
                  {getIconById("iconlupa")}
                </View>
                <StyledText graySilver font14pt regular>
                  Assing Customer
                </StyledText>
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

              <StyledGradientButton
                text={"Confirm"}
                action={() => confirmDate()}
              />
            </View>
          </Modal>

          <EmployeeSelectorModal
            visible={modalEmployeeVisible}
            onClose={handleCloseModal}
            onConfirm={handleConfirmSelection}
          />

          <MapModal
            setSelectedAddress={setSelectedAddress}
            isVisible={isModalVisible}
            toggleModal={toggleModal}
          />
        </View>
      </ScrollView>
    </>
  );
}
