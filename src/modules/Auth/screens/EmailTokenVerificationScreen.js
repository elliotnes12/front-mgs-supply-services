import { View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useRef } from "react";
import { style } from "../styles/EmailTokenVerificationStyle";
import { getIconById } from "../../../utils/util";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledText, { StyledGradientButton } from "../../../utils/globalstyle";
import { TextInput } from "react-native-gesture-handler";

export function EmailTokenVerificationScreen() {

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleTextChange = (text, index) => {
    if (text.length === 1) {
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.length) {
        inputRefs[nextIndex].current.focus();
      }
    }
  };

  return (
    <SafeAreaView styles={style.emailcontainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        styles={{ flex: 1 }}
      >
        <TouchableOpacity style={style.Containergoback}>
          {getIconById("iconGoBack")}
        </TouchableOpacity>
        <View style={style.contenido}>
          <View style={style.message}>{getIconById("imgVerificationCode")}</View>
          <View style={style.contened__text}>
            <View style={style.text}>
              <StyledText titlleBig> Verify your email</StyledText>
            </View>
            <StyledText regularGray>
              {" "}
              Check your email and enter the{" "}
            </StyledText>
            <StyledText regularGray> 4 digits we sent you</StyledText>
          </View>

          <View style={style.contenidoInput}>
            {inputRefs.map((ref, index) => (
              <TextInput
                key={index}
                ref={ref}
                maxLength={1}
                style={style.input}
                keyboardType="numeric"
                onChangeText={(text) => handleTextChange(text, index)}
              />
            ))}
          </View>
          <View style={style.buttom}>
            <StyledGradientButton text={"send"} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
