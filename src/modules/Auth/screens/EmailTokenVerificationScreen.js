import { View, TouchableOpacity, KeyboardAvoidingView, Text } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { style } from "../styles/EmailTokenVerificationStyle";
import { getIconById } from "../../../utils/util";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledText, { StyledGradientButton } from "../../../utils/globalstyle";
import { TextInput } from "react-native-gesture-handler";
import { Auth } from "../../../api/auth";
import { Response } from "../../../utils/Response";
import { ENV, screens } from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "../../../components/core/Modal/Alert";
import { useAuth } from "../hooks";
import { theme } from "../../../utils/theme";
import { useNavigation } from "@react-navigation/native";

const authController = new Auth();
const objectResponse = new Response();

export function EmailTokenVerificationScreen() {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [code, setCode] = useState(["", "", "", ""]);
  const [isFieldEmpty, setIsFieldEmpty] = useState([false, false, false, false]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(60);
  const [isLogin, setIsLogin] = useState(false);
  const [showResendLink, setShowResendLink] = useState(false);
  const navigation = useNavigation();
  let email = "";
  const { login, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem(ENV.JWT.ACCESS);
      if (token != null) {
        setIsLogin(true);
      }
    })();
  }, []);

  useEffect(() => {
    const startTimer = () => {
      setShowResendLink(false);
      const timer = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter <= 1) {
            clearInterval(timer);
            setShowResendLink(true);
            return 0;
          }
          return prevCounter - 1;
        });
      }, 1000);
    };

    startTimer();

    return () => clearInterval();
  }, []);

  const redirectLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setModalVisible(false);
      setLoading(false);
      logout();

      navigation.reset({
        index: 0,
        routes: [{ name: screens.auth.loginScreen }],
      });
    }, 3000);
  };

  const handleTextChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    const newIsFieldEmpty = [...isFieldEmpty];
    newIsFieldEmpty[index] = text.length === 0;
    setIsFieldEmpty(newIsFieldEmpty);

    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    if (text.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }

    if (index === inputRefs.length - 1 && text.length === 1) {
      inputRefs[index].current.blur();
    }
  };

  const validateCode = () => {
    const fieldsEmpty = code.map((value) => value === "");
    setIsFieldEmpty(fieldsEmpty);

    const hasEmptyFields = fieldsEmpty.includes(true);
    if (hasEmptyFields) {
      setMessage("Please fill in all fields");
      return;
    }

    (async () => {
      const tempCode = code.join("-");
      try {
        setLoading(true);
        setModalVisible(true);
        email = await AsyncStorage.getItem(ENV.STORAGE.EMAIL);
        const response = await authController.validateCode(tempCode, email);
        const { code, data } = objectResponse.getResponse(response);

        if (code !== 200) {
          throw new Error();
        }

        setModalVisible(false);
        await login(data?.access);
      } catch (e) {
        setMessage("Invalid code");
      } finally {
        setLoading(false);
      }
    })();
  };

  const resendCode = () => {
    (async () => {
      try {
        setLoading(true);
        setModalVisible(true);

        email = await AsyncStorage.getItem(ENV.STORAGE.EMAIL);
        const response = await authController.generateCode(email);
        setCounter(60);
        setShowResendLink(false);

        const timer = setInterval(() => {
          setCounter((prevCounter) => {
            if (prevCounter <= 1) {
              clearInterval(timer);
              setShowResendLink(true);
              return 0;
            }
            return prevCounter - 1;
          });
        }, 1000);

        setModalVisible(false);
      } catch (e) {
        setMessage("Please try again later");
      } finally {
        setLoading(false);
      }
    })();
  };

  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={style.emailcontainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={style.contenido}>
          <View style={style.message}>{getIconById("imgVerificationCode")}</View>
          <View style={style.contened__text}>
            <View style={style.text}>
              <StyledText titlleBig>Verify your email</StyledText>
            </View>
            <StyledText regularGray>
              Check your email and enter the{" "}
            </StyledText>
            <StyledText regularGray>4 digits we sent you</StyledText>
          </View>

          <View style={style.contenidoInput}>
            {inputRefs.map((ref, index) => (
              <TextInput
                key={index}
                ref={ref}
                maxLength={1}
                style={[
                  style.input,
                  isFieldEmpty[index] && { borderColor: theme.colors.error, borderWidth: 1 },
                ]}
                keyboardType="numeric"
                onChangeText={(text) => handleTextChange(text, index)}
                value={code[index]}
              />
            ))}
          </View>

          <View style={style.buttom}>
            <StyledGradientButton action={() => validateCode()} text={"send"} />
          </View>

          {showResendLink ? (
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => resendCode()}>
              <StyledText brightBlue>Resend code</StyledText>
            </TouchableOpacity>
          ) : (
            <Text style={style.timerText}>
              Resend code in {counter} seconds
            </Text>
          )}

          {isLogin && (
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => redirectLogin()}>
              <StyledText brightBlue>Logout</StyledText>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>

      <Alert
        show={isModalVisible}
        type={"info"}
        loading={loading}
        onClose={toggleModal}
        textConfirm="OK"
        onConfirm={() => setModalVisible(false)}
        message={message}
        isDanger={loading ? false : true}
      />
    </SafeAreaView>
  );
}
