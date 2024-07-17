import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFormik } from "formik";
import { useState } from "react";
import { ActivityIndicator, Pressable, Text, TextInput, TouchableOpacity, View,Image } from "react-native";
import { assets } from "../../../assets";
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
      setLoading(true);
      try {
        const { email, password } = formValue;
     
        const { data } = await authController.login(email, password);
       
        await authController.setAccessToken(data.access);
        await authController.setRefreshToken(data.refresh);
        await login(data.access);

      } catch (error) {
         toggleModal();
      }finally{
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
    <LayoutAuth userType={"login"}>

      <View style={styles.logo}>
      <Image style={{ width: "100%", height: "100%" }} alt="Logo-MgsSupplyServices"  resizeMode="contain" source={assets.image.png.originLogo} />

      </View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Enter and Keep your work day recorded.</Text>
     <View style={styles.field}>
        <Text style={styles.label}>Email address</Text>
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
            style={styles.input} 
            secureTextEntry={hide}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
        </View>
      </View>
      
      <Pressable onPress={formik.handleSubmit}>
          <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.button}>
          {loading && (
              <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="small" animating={true} color="#fff" />
              </View>
            )}
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.loginNowContainer}>
          <Text style={styles.loginNowText}>Don't have an account?
          <TouchableOpacity  onPress={goToRegister}>
            <Text style={styles.loginNowLink}> Sign up</Text>
          </TouchableOpacity> 
          </Text>
         
        </View>

      
      
    </LayoutAuth>
  );
}
