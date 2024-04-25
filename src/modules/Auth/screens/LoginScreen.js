import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator, Pressable, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../../components/core/Modal/Modal";
import { screens } from "../../../utils";
import { Auth } from "../api/auth";
import { initialValues, validationSchema } from "../forms/LoginForm.form";
import { useAuth } from "../hooks";
import LayoutAuth from "../layout/layout.auth";
import { styles } from "../styles/LoginScreen.styles";

const authController = new Auth();

export function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [hide, setHide] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setLoading(true);
      try {
        const { email, password } = formValue;
        const { access, refresh } = await authController.login(email, password);
        await authController.setAccessToken(access);
        await authController.setRefreshToken(refresh);
        await login(access);
        setLoading(false);
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

  const goToRegister = () => {
    navigation.navigate(screens.auth.registerScreen);
  };

  return (
    <LayoutAuth>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Enter and Keep your work day recorded.</Text>
      <View style={styles.formContainer}>
        <View style={[styles.field, { borderColor: isEmailFocused ? "rgba(125, 167, 77, 1)" : "rgba(0, 110, 233, 0.1)" } , formik.errors.email && styles.inputError]}>
          <TextInput
            style={[styles.input, !isEmailFocused && styles.inputInactive]}
            placeholder="Email"
            placeholderTextColor="#7DA74D"
            autoCapitalize="none"
            value={formik.values.email}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>
        <View style={[styles.field, { borderColor: isPasswordFocused ? "rgba(125, 167, 77, 1)" : "rgba(0, 110, 233, 0.1)" }, formik.errors.password && styles.inputError]}>
          <TextInput
            style={[styles.input, !isPasswordFocused && styles.inputInactive]}
            placeholder="Password"
            placeholderTextColor="#7DA74D"
            secureTextEntry={hide}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
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
          {loading && (
            <ActivityIndicator size="small" animating={true} color="#fff" style={styles.buttonSpinner} />
          )}
          <Text style={[styles.text, loading && { color: "rgba(255, 255, 255, 0.5)" }]}>Login</Text>
        </Pressable>
        <CustomModal isVisible={isModalVisible} onClose={closeModal}>
          <Text style={styles.errorlogin}>Invalid username or Password</Text>
        </CustomModal>
      </View>
      <Pressable style={styles.signUp} onPress={goToRegister}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
    </LayoutAuth>
  );
}
