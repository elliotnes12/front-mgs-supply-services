import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { screens } from "../../../utils";
import { Auth } from "../api/auth";
import { initialValues, validationSchema } from "../forms/LoginForm.form";
import { useAuth } from "../hooks";
import LayoutAuth from "../layout/layout.auth";
import { styles } from "../styles/LoginScreen.styles";
import StyledText, { StyledGradientButton } from "../../../utils/globalstyle";

const authController = new Auth();

export function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [hide, setHide] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [marginTopContent, setMarginTopContent] = useState(20)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setLoading(true);
      try {
        const { email, password } = formValue;

        const { data } = await authController.login(email, password);

        await authController.setAccessToken(data.access);
        await authController.setRefreshToken(data.refresh);
        await login(data.access);

      } catch (error) {
        toggleModal();
      } finally {
        setLoading(false);
      }
    },
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const goToRegister = () => {
    navigation.navigate(screens.auth.registerScreen);
  };

  return (
    <LayoutAuth logo={true} userType={"login"}>

      <StyledText headerBig>Welcome Back</StyledText>
      <StyledText regularWhite>Enter and Keep your work day recorded.</StyledText>

      <View style={{ marginTop: 30 }}>
        <View style={styles.field}>
          <StyledText regularWhite>Email address</StyledText>
          <View style={[styles.inputContainer, formik.errors.email && styles.inputError]}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={formik.values.email}
              onChangeText={(text) => formik.setFieldValue("email", text)}
            />
          </View>
        </View>

        <View style={styles.field}>
          <View style={styles.labelContainer}>
            <StyledText regularWhite>Your password</StyledText>
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
              style={styles.input}
              secureTextEntry={hide}
              value={formik.values.password}
              onChangeText={(text) => formik.setFieldValue("password", text)}
            />
          </View>
        </View>

        <View style={{ justifyContent: "center" }}>
          <StyledGradientButton text={"Login"} action={() => formik.handleSubmit()} />
        </View>

        <View style={styles.loginNowContainer}>
          <Text style={styles.loginNowText}>Don't have an account</Text>
          <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.loginNowLink}> Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </LayoutAuth>
  );
}
