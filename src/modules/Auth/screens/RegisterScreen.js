import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormik } from "formik";
import { getIcon, getIconById } from "../../../utils/util";
import { Auth } from "../api/auth";
import { initialValues, validationSchema } from "../forms/RegisterForm.form";
import LayoutAuth from "../layout/layout.auth";
import { styles } from "../styles/RegisterScreen.styles";
import { Alert } from "../../../components/core/Modal/Alert";
import { stylesGlobal } from "../../styles/global.style";
import { ENV } from "../../../utils";
import StyledText, { StyledGradientButton } from "../../../utils/globalstyle";
import { theme } from "../../../utils/theme";
import { Response } from "../../../utils/Response";

const authController = new Auth();
const objectResponse = new Response();

export function RegisterScreen() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState("customer");
  const [showIdInput, setShowIdInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hide, setHide] = useState(true);
  const [confirmHide, setConfirmHide] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleRadioChange = (newValue) => {
    if (newValue != userType) {
      formik.resetForm();
    }

    setUserType(newValue);
    setShowIdInput(newValue === ENV.TYPES_USERS.COMPANY);

    if (newValue === ENV.TYPES_USERS.COMPANY) {
      formik.setFieldValue("employeeNumber", undefined);
    }
    formik.setFieldValue("userType", newValue);
  };

  const formik = useFormik({
    initialValues: initialValues(),

    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue, { resetForm }) => {
      setLoading(true);
      try {
        const response = await authController.register(
          formValue.email,
          formValue.password,
          formValue.employeeNumber,
          formValue.name
        );
        setLoading(false);

        const { code, message, data } = objectResponse.getResponse(response);

        if (code != 201) {
          throw Error(message);
        }

        navigation.navigate("EmailTokenVerificationScreen");
      } catch (error) {
        console.log(error);
        setMessage(error.message);
        setLoading(false);
        toggleModal();
      }
    },
  });

  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  const handleLoginNowPress = () => {
    navigation.navigate("LoginScreen");
  };

  const closeAlert = () => {
    setShowAlert((prevent) => !prevent);
  };

  return (
    <LayoutAuth userType={userType}>
      <View style={styles.container}>
        <StyledText headerBig>Registration</StyledText>
        <StyledText regularWhite>
          Create your account and start today
        </StyledText>
        <Text style={styles.cuestion}>How do you identify yourself?</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => handleRadioChange("customer")}
            style={{ marginRight: 10 }}
          >
            {userType === "customer" ? (
              <LinearGradient
                colors={[theme.gradient.color1, theme.gradient.color2]}
                style={styles.registerButton}
              >
                <View style={{ width: 26, height: 26, marginRight: 10 }}>
                  {getIconById("iconProfileWhite")}
                </View>
                <Text style={[{ color: "#fff" }, styles.buttonText]}>
                  Customer
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.registerButton}>
                <View style={{ width: 26, height: 26, marginRight: 10 }}>
                  {getIconById("iconProfileGray")}
                </View>
                <Text style={styles.buttonText}>Customer</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleRadioChange("company")}>
            {userType === "company" ? (
              <LinearGradient
                colors={["#CEDC39", "#7DA74D"]}
                style={styles.registerButton}
              >
                <View style={{ width: 25, height: 25, marginRight: 10 }}>
                  {getIconById("iconMaletaWhite")}
                </View>
                <Text style={[{ color: "#fff" }, styles.buttonText]}>
                  Company
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.registerButton}>
                <View style={{ width: 26, height: 26, marginRight: 10 }}>
                  {getIconById("iconMaletaGray")}
                </View>
                <Text style={styles.buttonText}>Company</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <StyledText regularWhite>Email address</StyledText>
          <View
            style={[
              styles.inputContainer,
              formik.errors.email && styles.inputError,
            ]}
          >
            <TextInput
              autoCapitalize="none"
              value={formik.values.email}
              onChangeText={(text) => formik.setFieldValue("email", text)}
              style={styles.input}
            />
          </View>
        </View>

        {!showIdInput && (
          <View style={styles.field}>
            <StyledText regularWhite>Name</StyledText>
            <View
              style={[
                styles.inputContainer,
                formik.errors.name && styles.inputError,
              ]}
            >
              <TextInput
                autoCapitalize="none"
                value={formik.values.name}
                onChangeText={(text) => formik.setFieldValue("name", text)}
                style={styles.input}
              />
            </View>
          </View>
        )}

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
          <View
            style={[
              styles.inputContainer,
              formik.errors.password && styles.inputError,
            ]}
          >
            <TextInput
              autoCapitalize="none"
              value={formik.values.password}
              secureTextEntry={hide}
              onChangeText={(text) => formik.setFieldValue("password", text)}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.field}>
          <View style={styles.labelContainer}>
            <StyledText regularWhite>Confirm your password</StyledText>
            <TouchableOpacity onPress={() => setConfirmHide(!confirmHide)}>
              <MaterialCommunityIcons
                style={styles.icon}
                name={confirmHide ? "eye-off" : "eye"}
                color="#FFFFFF"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.inputContainer,
              formik.errors.confirmPassword && styles.inputError,
            ]}
          >
            <TextInput
              autoCapitalize="none"
              value={formik.values.confirmPassword}
              secureTextEntry={confirmHide}
              onChangeText={(text) =>
                formik.setFieldValue("confirmPassword", text)
              }
              style={styles.input}
            />
          </View>
        </View>

        {showIdInput && (
          <View style={styles.field}>
            <StyledText regularWhite>Confirm your password</StyledText>
            <View
              style={[
                styles.inputContainer,
                formik.errors.employeeNumber && styles.inputError,
              ]}
            >
              <TextInput
                autoCapitalize="none"
                value={formik.values.employeeNumber}
                onChangeText={(text) =>
                  formik.setFieldValue("employeeNumber", text)
                }
              />
            </View>
          </View>
        )}

        <StyledGradientButton
          text={"Sign Up"}
          action={() => {
            formik.handleSubmit();
          }}
        />

        <View style={styles.loginNowContainer}>
          <Text style={styles.loginNowText}>
            Do you already have an account?
            <TouchableOpacity onPress={handleLoginNowPress}>
              <Text style={styles.loginNowLink}> Login Now</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <Alert
          show={isModalVisible}
          type={"info"}
          onClose={toggleModal}
          textConfirm="Delete"
          onConfirm={() => {}}
          message={message}
          isDanger
          loading={loading}
        />
      </View>
    </LayoutAuth>
  );
}
