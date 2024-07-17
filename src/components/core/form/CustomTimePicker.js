import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "../styles/CustomDatePicker.styles";

export const CustomTimePicker = ({ label, time, setTime }) => {
  const [showPicker, setShowPicker] = useState(false);

  const toggleTimepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedTime) => {
    if (type === "set") {
      const currentTime = selectedTime || time;
      setTime(currentTime);

      if (Platform.OS === "android") {
        toggleTimepicker();
      }
    } else {
      toggleTimepicker();
    }
  };

  const confirmIOSTime = () => {
    toggleTimepicker();
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      {showPicker && (
        <DateTimePicker
          mode="time"
          display="spinner"
          value={time}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}

      {showPicker && Platform.OS === "ios" && (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            style={[styles.button, styles.pickerButton, { backgroundColor: "#11182711" }]}
            onPress={toggleTimepicker}
          >
            <Text style={[styles.buttonText, { color: "#075985" }]}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.pickerButton]}
            onPress={confirmIOSTime}
          >
            <Text style={[styles.buttonText]}>Confirm</Text>
          </TouchableOpacity>
        </View>
      )}

      {!showPicker && (
        <Pressable onPress={toggleTimepicker}>
          <TextInput
            style={styles.input}
            placeholder="Select Time"
            value={time?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            placeholderTextColor="#11182744"
            editable={false}
            onPressIn={toggleTimepicker}
          />
        </Pressable>
      )}
    </View>
  );
};
