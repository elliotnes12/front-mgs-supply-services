import React, { useEffect, useState } from "react";
import {
  Platform,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Keyboard,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { assets } from "../../../assets";
import { styles } from "./layout.styles";

export default function LayoutAuth({ children, userType, logo }) {
  const [loading, setLoading] = useState(true);
  const [marginContent, setMarginContent] = useState(10);

  useEffect(() => {
    if (logo) {
      setMarginContent(80);
    }
  }, [logo]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setMarginContent(-40);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        if (logo) {
          setMarginContent(80);
        } else {
          setMarginContent(10); // or any other default margin when the logo is not present
        }
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [logo]);

  let backgroundImage;

  if (userType === "customer") {
    backgroundImage = assets.image.png.bgCustomer;
  } else if (userType === "company") {
    backgroundImage = assets.image.png.bgEmployee;
  } else if (userType === "login") {
    backgroundImage = assets.image.png.bglogin;
  }

  const handleImageLoad = () => {
    setLoading(false);
  };

  if (loading) <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <SafeAreaView style={{ flexGrow: 1, justifyContent: "center" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={backgroundImage}
            style={styles.container}
            resizeMode="cover"
            onLoad={handleImageLoad}
          >
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.overlay} />
              {logo && (
                <View style={[styles.logo]}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    alt="Logo-MgsSupplyServices"
                    resizeMode="contain"
                    source={assets.image.png.originLogo}
                  />
                </View>
              )}
              <View style={[styles.content, { marginTop: marginContent }]}>
                {children}
              </View>
            </ScrollView>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
