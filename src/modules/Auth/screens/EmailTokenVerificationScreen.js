import { View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React from "react";
import { style } from "../styles/EmailTokenVerificationStyle";
import { getIconById } from "../../../utils/util";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledText, { StyledGradientButton } from "../../../utils/globalstyle";
import { TextInput } from "react-native-gesture-handler";

export function EmailTokenVerificationScreen() {
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
          <View style={style.message}>{getIconById("messageVerfication")}</View>
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
            <TextInput maxLength={1} style={style.input} />
            <TextInput maxLength={1} style={style.input} />
            <TextInput maxLength={1} style={style.input} />
            <TextInput maxLength={1} style={style.input} />
          </View>
          <View style={style.buttom}>
            <StyledGradientButton text={"send"} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
