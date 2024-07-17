import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, View, ImageBackground, SafeAreaView, ScrollView, Keyboard, ActivityIndicator } from "react-native";
import { assets } from "../../../assets";
import { styles } from "./layout.styles";
import { LoadingScreen } from "../../../components/core/LoadingScreen";

export default function LayoutAuth({ children, userType }) {
  const [loading, setLoading] = useState(true);
  
  let backgroundImage;

  if (userType === "customer") {
    backgroundImage = assets.image.png.bgCustomer;
  } else if (userType === "company") {
    backgroundImage = assets.image.png.bgEmployee;
  }
  else if(userType === "login"){
    backgroundImage = assets.image.png.bglogin;
  }

  const handleImageLoad = () => {
    setLoading(false);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
        enabled
      >
        <View style={{ flex: 1 }}>
          {loading && (
            <View style={{flex:1}}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
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
              <View style={styles.content}>
                {children}
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
