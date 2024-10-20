import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Keyboard,
  Text,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getIconById } from "../../../utils/util";
import { useLocation } from "../../../modules/Auth/hooks";
import { styles } from "./styles/MapModal.styles";

export function TimeModal({ isVisible, toggleModal, setSelectedTime }) {
  const [address, setAddress] = useState("");
  const refInput = useRef();
  const mapRef = useRef(null);
  const animation = useRef(new Animated.Value(0)).current;
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const { origin, loading } = useLocation();
  const [coords, setCoords] = useState(undefined);
  const [mapClicked, setMapClicked] = useState(false);

  const [time, setTime] = useState(new Date()); // State for selected time
  const [showPicker, setShowPicker] = useState(true); // State to toggle the picker visibility

  useEffect(() => {
    Animated.timing(animation, {
      toValue: toggle ? 1 : 0,
      duration: 550,
      useNativeDriver: false,
    }).start();
  }, [toggle]);

  useEffect(() => {
    if (toggle) {
      refInput.current.focus();
    } else {
      Keyboard.dismiss();
    }
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

  // Handle time picker change
  const onTimeChange = (event, selectedTime) => {
    if (event.type === "set") { // 'set' means the user confirmed the time
      const currentTime = selectedTime || time;
      setTime(currentTime); // Set selected time
      setSelectedTime(currentTime); // Send selected time to parent component

    } else {
      setShowPicker(false); // Close the picker if dismissed
    }
  };

  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      isVisible={isVisible}
      onBackdropPress={toggleModal} // Close modal when tapping outside
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
          {getIconById("iconClose")}
        </TouchableOpacity>


      </View>
    </Modal>
  );
}
