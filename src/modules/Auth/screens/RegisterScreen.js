import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { Input } from "native-base";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { RadioButton, } from "react-native-paper";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Auth } from "../api/auth";
import { initialValues, validationSchema } from "../forms/RegisterForm.form";
import LayoutAuth from "../layout/layout.auth";
import { styles } from "../styles/RegisterScreen.styles";
import CustomModal from "../../../components/core/Modal/Modal";

const authController = new Auth();

export function RegisterScreen() {

  const navigation = useNavigation();

  const [value, setValue] = useState("customer");
  const [showIdInput, setShowIdInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRadioChange = (newValue) => {
    setValue(newValue);
    setShowIdInput(newValue === "company");
    if(newValue === "customer"){
      formik.setFieldValue("employeeNumber", undefined);
    }
    formik.setFieldValue("userType", newValue);
  };

  const [hide, setHide] = useState(true);
  const [confirmHide, setConfirmHide] = useState(true);
  const [message,setMessage] = useState("")
  const [isModalVisible, setModalVisible] = useState(false);


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue,{resetForm}) => {

      setLoading(true)

      try {
      
        await authController.register(formValue.email, formValue.password, formValue.employeeNumber);
        setLoading(false)
        setMessage("User registered successfully")
        toggleModal();
        resetForm();

      } catch (error) {
        setLoading(false)
        setMessage(error.msg)
        toggleModal();
      }
    },
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const closeModal = () => {
    if (isModalVisible) {
      setModalVisible(false);
    }
  };


  return (

    <LayoutAuth>

      <Text style={styles.title}>Registration</Text>
      <View style={styles.container}>

        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginBottom: 15 }}>
          <TouchableOpacity style={{ marginRight: 35 }} onPress={() => handleRadioChange("customer")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="customer"
                status={value === "customer" ? "checked" : "unchecked"}
                onPress={() => handleRadioChange("customer")}
                uncheckedColor="#000"
                color="#7DA74D"
              />
              <Text style={styles.label}>Customer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRadioChange("company")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="company"
                status={value === "company" ? "checked" : "unchecked"}
                onPress={() => handleRadioChange("company")}
                uncheckedColor="#000"
                color="#7DA74D"
              />
              <Text style={styles.label}>Company</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.field, formik.errors.email && styles.inputError]}>
          <Input
            placeholder="Email"
            variant="unstyled"
            placeholderTextColor="#7DA74D"
            autoCapitalize={false}
            value={formik.values.email}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            style={styles.input}
          />
        </View>
        <View style={[styles.field, formik.errors.password && styles.inputError]}>

          <Input
            placeholder="Password"
            variant="unstyled"
            autoCapitalize={false}
            placeholderTextColor="#7DA74D"
            value={formik.values.password}
            secureTextEntry={hide}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setHide(!hide)}>
            <MaterialCommunityIcons
              style={styles.icon}
              name={hide ? "eye-off" : "eye"}
              color="#000000"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.field, formik.errors.confirmPassword && styles.inputError]}>

          <Input
            placeholder="Confirm Password"
            variant="unstyled"
            autoCapitalize={false}
            placeholderTextColor="#7DA74D"
            value={formik.values.confirmPassword}
            secureTextEntry={confirmHide}
            onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setConfirmHide(!confirmHide)}>
            <MaterialCommunityIcons
              style={styles.icon}
              name={confirmHide ? "eye-off" : "eye"}
              color="#000000"
              size={30}
            />
          </TouchableOpacity>
        </View>


        {showIdInput && (

          <View style={[styles.field, formik.errors.employeeNumber && styles.inputError]}>

            <Input
              placeholder="employee number"
              variant="unstyled"
              autoCapitalize={false}
              placeholderTextColor="#7DA74D"
              value={formik.values.employeeNumber}
              onChangeText={(text) => formik.setFieldValue("employeeNumber", text)}
              style={styles.input}
            />
          </View>
        )}

        <Pressable style={({ pressed }) => [styles.button, pressed && { backgroundColor: '#81B547' }]} onPress={formik.handleSubmit}>
          {loading && (
            <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size="small" animating={true} color="#fff" />
            </View>
          )}
          <Text style={styles.text}>Register</Text>
        </Pressable>

      </View>
      <Pressable style={styles.btnLogin} onPress={() => {
        navigation.goBack();
      }}>
        <Text style={styles.btnLoginText}>Login</Text>
      </Pressable>

      <CustomModal isVisible={isModalVisible} onClose={closeModal}>
          <Text style={styles.errorlogin}>{message}</Text>
        </CustomModal>


    </LayoutAuth>


  );
}