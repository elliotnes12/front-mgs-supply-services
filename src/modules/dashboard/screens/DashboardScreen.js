import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../Auth/hooks";
import { ServiceListScreenCt } from "./customer/ServiceListScreen";
import { ServiceListScreenSupervisor } from "./supervisor/ServiceListScreenSupervisor";
import { ServiceListScreenEmployee } from "./employee/ServiceListScreenEmployee";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/dashboard.styles";
import { ServiceListScreenManager } from "./manager/ServicesListScreenManager";
import { getIconById } from "../../../utils/util";
import StyledText from "../../../utils/globalstyle";
import { theme } from "../../../utils/theme";
import { ENV, screens } from "../../../utils";

export function DashboardScreen() {
  const { userInfo, isCustomer, accessToken } = useAuth();

  const { name } = userInfo;
  const swingAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const animateAlert = () => {
    Animated.sequence([
      Animated.timing(swingAnim, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(swingAnim, {
        toValue: -1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(swingAnim, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(swingAnim, {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startSwing = () => {
    animateAlert();
  };

  const swing = swingAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-15deg", "15deg"],
  });

  /**
   *
   *
   */

  const DashboardHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.containerProfile}>
            <Pressable
              onPress={() => navigation.navigate(screens.global.settingScreen)}
              style={styles.goProfile}
            >
              <View style={styles.imageProfile}>
                {getIconById("iconProfile")}
              </View>
            </Pressable>
          </View>
          <View style={styles.userInfo}>
            <StyledText regularGray>Hello,</StyledText>
            <StyledText boldGray line20 font17pt>
              {name}
            </StyledText>
          </View>
        </View>
        <Animated.View style={{ transform: [{ rotate: swing }] }}>
          <TouchableOpacity style={styles.alerts} onPress={startSwing}>
            <View style={styles.alerts__count}>
              <Text style={styles.alert__text}>3</Text>
            </View>
            {getIconById("iconAlerts")}
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  const Banner = () => {
    return (
      <View style={styles.banner}>
        <LinearGradient
          colors={[theme.gradient.color1, theme.gradient.color2]}
          style={styles.bgbanner}
        >
          <View style={styles.promos__label}>
            <StyledText font12pt textGreen2 bold>
              New
            </StyledText>
          </View>
          <View style={styles.promos__title}>
            <StyledText font20pt headerBig>
              Register Your service via chat
            </StyledText>
          </View>

          {getIconById("bgPleca")}

          <View style={styles.bg_person}>
            {getIconById("iconSupportPerson")}
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <ScrollView
      style={{ flexGrow: 1, padding: 0, margin: 0, backgroundColor: "#fff" }}
      alwaysBounceVertical={false}
    >
      {<DashboardHeader />}
      <View style={styles.background}>
        {isCustomer && (
          <>
            {<Banner />}

            <View style={{ marginVertical: 10 }}>
              <StyledText bold font20pt>
                Choose a category
              </StyledText>
            </View>

            <ServiceListScreenCt />
          </>
        )}
        {!isCustomer && userInfo.type === ENV.TYPES_USERS.SUPERVISOR && (
          <ServiceListScreenSupervisor />
        )}

        {!isCustomer && userInfo.type === ENV.TYPES_USERS.EMPLOYEE && (
          <ServiceListScreenEmployee />
        )}
        {!isCustomer && userInfo.type === ENV.TYPES_USERS.MANAGER && (
          <ServiceListScreenManager />
        )}
      </View>
    </ScrollView>
  );
}
