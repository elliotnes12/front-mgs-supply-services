import React from "react";
import { styles } from "./styles/HeaderChat.styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assets } from "../../assets";
import { getIconById } from "../../utils/util";
import StyledText from "../../utils/globalstyle";

export function HeaderChat({ userName, fnMenu }) {
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient colors={["#CEDC39", "#7DA74D"]} style={styles.header}>
        <SafeAreaView style={styles.header__content}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: 35, height: 35, marginRight: 10 }}
          >
            <Image
              alt="icon goBack"
              style={{ width: "100%", height: "100%" }}
              source={assets.image.png.iconLeftArrow}
            />
          </TouchableOpacity>
          <View style={[styles.profile__image]}>
            {getIconById("iconAvatar")}
          </View>
          <View style={{ flex: 2, justifyContent: "center", paddingLeft: 5 }}>
            <StyledText regularWhite bold font17pt line20 >{userName}</StyledText>
            <StyledText white font14pt line20 >Support</StyledText>
          </View>
          <TouchableOpacity onPress={fnMenu}
            style={[styles.menuVertical]}>
            {getIconById("iconVertical")}
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}
