import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
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



  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {

      
      setLoading(true)
      
      try {

        const { email, password } = formValue;
        const { access, refresh } = await authController.login(email, password);
        await authController.setAccessToken(access);
        await authController.setRefreshToken(refresh);
        await login(access);
        setLoading(false)


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
          {loading && (
            <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size="small" animating={true} color="#fff" />
            </View>
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
