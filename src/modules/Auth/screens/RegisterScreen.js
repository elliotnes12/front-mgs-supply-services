import React, { useState } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Auth } from "../api/auth";
import { initialValues, validationSchema } from "../forms/RegisterForm.form";
import LayoutAuth from "../layout/layout.auth";
import { styles } from "../styles/RegisterScreen.styles";
import CustomModal from "../../../components/core/Modal/Modal";
import { assets } from "../../../assets";

const authController = new Auth();

export function RegisterScreen() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState("customer");
  const [showIdInput, setShowIdInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPassFocused, setIsPassFocused] = useState(false);
  const [isPassConfirmFocused, setIsPassConfirmFocused] = useState(false);
  const [isIdEmployeeFocused, setIsIdEmployeeFocused] = useState(false);

  const handleRadioChange = (newValue) => {
    setUserType(newValue);
    setShowIdInput(newValue === "company")
    if (newValue === "customer") {
      formik.setFieldValue("employeeNumber", undefined);
    }
    formik.setFieldValue("userType", newValue);
  }




  const [hide, setHide] = useState(true);
  const [confirmHide, setConfirmHide] = useState(true);
  const [message, setMessage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue, { resetForm }) => {
      setLoading(true);
      try {
        await authController.register(formValue.email, formValue.password, formValue.employeeNumber);
        setLoading(false);
        setMessage("User registered successfully");
        toggleModal();
        resetForm();
      } catch (error) {
        setLoading(false);
        setMessage(error.msg);
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

  const handleLoginNowPress = () => {
    // Navegar a la pantalla de inicio de sesión
    // Suponiendo que tienes una pantalla llamada LoginScreen
    navigation.navigate('LoginScreen');
  };

  return (
    <LayoutAuth userType={userType}>
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <Text style={styles.subtitle}>Create your account and start today</Text>
        <Text style={styles.cuestion}>How do you identify yourself?</Text>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handleRadioChange("customer")} style={{ marginRight: 10 }}>
            {userType === "customer" ? (
              <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.registerButton}>
                <View style={{ width: 26, height: 26, right: 15, }}>
                  <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={assets.image.png.customer} />
                </View>
                <Text style={[{ color: '#fff' }, styles.buttonText]}>Customer</Text>
              </LinearGradient>
            ) : (
              <View style={styles.registerButton}>
                <View style={{ width: 26, height: 26, right: 15, }}>
                  <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={assets.image.png.customerdos} />
                </View>

                <Text style={styles.buttonText}>Customer</Text>

              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleRadioChange("company")}>
            {userType === "company" ? (
              <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.registerButton}>
                <View style={{ width: 30, height: 30, right: 25, }}>
                  <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={assets.image.png.maletindos} />
                </View>
                <Text style={[{ color: '#fff' }, styles.buttonText]}>Company</Text>
              </LinearGradient>
            ) : (
              <View style={styles.registerButton}>

                <View style={{ width: 26, height: 26, right: 25 }}>
                  <Image style={{ width: "100%", height: "100%" }} resizeMode="contain" source={assets.image.png.iconMaleta} />
                </View>
                <Text style={styles.buttonText}>Company</Text>


              </View>

            )}
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email address</Text>
          <View style={[styles.inputContainer, formik.errors.email && styles.inputError]}>
            <TextInput
              autoCapitalize="none"
              value={formik.values.email}
              onChangeText={(text) => formik.setFieldValue("email", text)}
              style={styles.input}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
          </View>
        </View>

        {!showIdInput && (
          <View style={styles.field}>
            <Text style={styles.label}>Name</Text>
            <View style={[styles.inputContainer, formik.errors.name && styles.inputError]}>
              <TextInput
                autoCapitalize="none"
                value={formik.values.name}
                onChangeText={(text) => formik.setFieldValue("name", text)}
                style={styles.input}
                onFocus={() => setIsIdEmployeeFocused(true)}
                onBlur={() => setIsIdEmployeeFocused(false)}
              />
            </View>
          </View>
        )}

        <View style={styles.field}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Your password</Text>
            <TouchableOpacity onPress={() => setHide(!hide)}>
              <MaterialCommunityIcons
                style={styles.icon}
                name={hide ? "eye-off" : "eye"}
                color="#FFFFFF"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputContainer, formik.errors.password && styles.inputError]}>
            <TextInput
              autoCapitalize="none"
              value={formik.values.password}
              secureTextEntry={hide}
              onChangeText={(text) => formik.setFieldValue("password", text)}
              style={styles.input}
              onFocus={() => setIsPassFocused(true)}
              onBlur={() => setIsPassFocused(false)}
            />
          </View>
        </View>

        <View style={styles.field}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Confirm your password</Text>
            <TouchableOpacity onPress={() => setConfirmHide(!confirmHide)}>
              <MaterialCommunityIcons
                style={styles.icon}
                name={confirmHide ? "eye-off" : "eye"}
                color="#FFFFFF"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputContainer, formik.errors.confirmPassword && styles.inputError]}>
            <TextInput
              autoCapitalize="none"
              value={formik.values.confirmPassword}
              secureTextEntry={confirmHide}
              onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
              style={styles.input}
              onFocus={() => setIsPassConfirmFocused(true)}
              onBlur={() => setIsPassConfirmFocused(false)}
            />
          </View>
        </View>

        {showIdInput && (
          <View style={styles.field}>
            <Text style={styles.label}>Company</Text>
            <View style={[styles.inputContainer, formik.errors.employeeNumber && styles.inputError]}>
              <TextInput
                autoCapitalize="none"
                value={formik.values.employeeNumber}
                onChangeText={(text) => formik.setFieldValue("employeeNumber", text)}
                style={styles.input}
                onFocus={() => setIsIdEmployeeFocused(true)}
                onBlur={() => setIsIdEmployeeFocused(false)}
              />
            </View>
          </View>
        )}

        <Pressable onPress={formik.handleSubmit}>
          <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.signUpButton}>
            {loading && (
              <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="small" animating={true} color="#fff" />
              </View>
            )}
            <Text style={styles.text}>Sign Up</Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.loginNowContainer}>
          <Text style={styles.loginNowText}>Do you already have an account?
            <TouchableOpacity onPress={handleLoginNowPress}>
              <Text style={styles.loginNowLink}> Login Now</Text>
            </TouchableOpacity>
          </Text>

        </View>
      </View>
      <CustomModal isVisible={isModalVisible} onClose={closeModal}>
        <Text style={styles.errorlogin}>{message}</Text>
      </CustomModal>
    </LayoutAuth>
  );
}
