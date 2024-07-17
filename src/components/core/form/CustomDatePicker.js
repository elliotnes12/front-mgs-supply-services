
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
import {styles} from "../styles/CustomDatePicker.styles";

export const CustomDatePicker = ({ label, date, setDate }) => {
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatepicker();
      }
    } else {
      toggleDatepicker();
    }
  };

  const confirmIOSDate = () => {
    toggleDatepicker();
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}

      {showPicker && Platform.OS === "ios" && (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            style={[styles.button, styles.pickerButton, { backgroundColor: "#11182711" }]}
            onPress={toggleDatepicker}
          >
            <Text style={[styles.buttonText, { color: "#075985" }]}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.pickerButton]}
            onPress={confirmIOSDate}
          >
            <Text style={[styles.buttonText]}>Confirm</Text>
          </TouchableOpacity>
        </View>
      )}

      {!showPicker && (
        <Pressable onPress={toggleDatepicker}>
          <TextInput
            style={styles.input}
            placeholder="Sat Aug 21 2004"
            value={date.toDateString()}
            placeholderTextColor="#11182744"
            editable={false}
            onPressIn={toggleDatepicker}
          />
        </Pressable>
      )}
    </View>
  );
};
