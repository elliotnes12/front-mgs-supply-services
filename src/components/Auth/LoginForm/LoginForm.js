import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { useAuth } from "../../../hooks";
import { initialValues, validationSchema } from "./LoginForm.form";
import { styles } from "./LoginForm.styles";
import { Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomModal from "../../core/Modal/Modal";


const authController = new Auth();
export function LoginForm() {
  const { login } = useAuth();

  const [hide, setHide] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {

        setLoading(true)
        const { email, password } = formValue;
        const { access, refresh } = await authController.login(email, password);
        await authController.setAccessToken(access);
        await authController.setRefreshToken(refresh);
        await login(access);


      } catch (error) {
        setLoading(false);
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
    <>
      <View style={[styles.field, formik.errors.email && styles.inputError]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7DA74D"
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
        />
      </View>
      <View style={[styles.field, formik.errors.password && styles.inputError]}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7DA74D"
          secureTextEntry={hide}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
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

      <Pressable disabled={loading} style={({ pressed }) => [styles.button, pressed && { backgroundColor: '#81B547' }]} onPress={formik.handleSubmit}>
        {loading && ( // Mostrar el indicador de actividad dentro del botón si loading es verdadero
          <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="small" animating={true} color="#fff" />
          </View>
        )}
        <Text style={[styles.text, loading && { color: "rgba(255, 255, 255, 0.5)" }]}>Login</Text>
      </Pressable>

      <CustomModal isVisible={isModalVisible} onClose={closeModal}>
        <Text style={styles.errorlogin}>Invalid username or Password</Text>
      </CustomModal>


    </>
  );
}
