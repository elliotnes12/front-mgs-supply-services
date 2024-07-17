import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormik } from "formik";
import { getIcon } from "../../../utils/util";
import { Auth } from "../api/auth";
import { initialValues, validationSchema } from "../forms/RegisterForm.form";
import LayoutAuth from "../layout/layout.auth";
import { styles } from "../styles/RegisterScreen.styles";
import { Alert } from "../../../components/core/Modal/Alert";
import { stylesGlobal } from "../../styles/global.style";
import { ENV } from "../../../utils";

const authController = new Auth();

export function RegisterScreen() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState("customer");
  const [showIdInput, setShowIdInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hide, setHide] = useState(true);
  const [confirmHide, setConfirmHide] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

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
        await authController.register(
          formValue.email,
          formValue.password,
          formValue.employeeNumber,
          formValue.name
        );
        setLoading(false);
        setMessage("User registered successfully");
        resetForm();
      } catch (error) {
        setLoading(false);
        setMessage(error.meta.message);
        setShowAlert(true);
      }
    },
  });

  const handleLoginNowPress = () => {
    navigation.navigate("LoginScreen");
  };

  const closeAlert = () => {
    setShowAlert((prevent) => !prevent);
  };

  return (
    <LayoutAuth userType={userType}>
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <Text style={styles.subtitle}>Create your account and start today</Text>
        <Text style={styles.cuestion}>How do you identify yourself?</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => handleRadioChange("customer")}
            style={{ marginRight: 10 }}
          >
            {userType === "customer" ? (
              <LinearGradient
                colors={["#CEDC39", "#7DA74D"]}
                style={styles.registerButton}
              >
                <View style={{ width: 26, height: 26, marginRight: 10 }}>
                  <Image
                    style={stylesGlobal.imageMin__img}
                    resizeMode="contain"
                    source={getIcon("icon-profile-white")}
                  />
                </View>
                <Text style={[{ color: "#fff" }, styles.buttonText]}>
                  Customer
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.registerButton}>
                <View style={{ width: 26, height: 26, marginRight: 10 }}>
                  <Image
                    style={stylesGlobal.imageMin__img}
                    resizeMode="contain"
                    source={getIcon("icon-profile-gray")}
                  />
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
                  <Image
                    style={stylesGlobal.imageMin__img}
                    resizeMode="contain"
                    source={getIcon("icon-maletin-white")}
                  />
                </View>
                <Text style={[{ color: "#fff" }, styles.buttonText]}>
                  Company
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.registerButton}>
                <View style={{ width: 26, height: 26, marginRight: 10 }}>
                  <Image
                    style={stylesGlobal.imageMin__img}
                    resizeMode="contain"
                    source={getIcon("icon-maletin-gray")}
                  />
                </View>
                <Text style={styles.buttonText}>Company</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email address</Text>
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
            <Text style={styles.label}>Name</Text>
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
            <Text style={styles.label}>Company</Text>
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

        <Pressable onPress={formik.handleSubmit}>
          <LinearGradient
            colors={["#CEDC39", "#7DA74D"]}
            style={styles.signUpButton}
          >
            {loading && (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator size="small" animating={true} color="#fff" />
              </View>
            )}
            <Text style={styles.text}>Sign Up</Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.loginNowContainer}>
          <Text style={styles.loginNowText}>
            Do you already have an account?
            <TouchableOpacity onPress={handleLoginNowPress}>
              <Text style={styles.loginNowLink}> Login Now</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <Alert
          show={showAlert}
          setShowAlert={setShowAlert}
          onClose={closeAlert}
          type="info"
          title={message}
        />
      </View>
    </LayoutAuth>
  );
}
