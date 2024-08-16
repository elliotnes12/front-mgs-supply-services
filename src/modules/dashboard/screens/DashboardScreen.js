import { useRef } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { assets } from "../../../assets";
import { useAuth } from "../../Auth/hooks";
import { ServiceListScreenCt } from "./customer/ServiceListScreen";
import { ServiceListScreenSp } from "./supervisor/ServiceListScreenSupervisor";
import { ServiceListScreenEmployee } from "./employee/ServiceListScreenEmployee";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/dashboard.styles";
import { ServiceListScreenManager } from "./manager/ServicesListScreenManager";
import { getIconById } from "../../../utils/util";
import StyledText from "../../../utils/globalstyle";
import { theme } from "../../../utils/theme";

export function DashboardScreen() {
  const { userInfo, isCustomer } = useAuth();
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

  return (
    <ScrollView
      style={{ flexGrow: 1, padding: 0, margin: 0, backgroundColor: "#fff", height: "100%" }}
      alwaysBounceVertical={false}
    >
      <View style={styles.background}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <View style={styles.containerProfile}>
              <Pressable
                onPress={() => navigation.navigate("ProfileScreen")}
                style={styles.goProfile}
              >
                <View style={styles.imageProfile}>
                  {getIconById("profile")}
                </View>
              </Pressable>
            </View>
            <View style={styles.userInfo}>
              <StyledText regularGray>Hello,</StyledText>
              <StyledText boldGray line20 font17pt>{name}</StyledText>
            </View>
          </View>
          <Animated.View style={{ transform: [{ rotate: swing }] }}>
            <TouchableOpacity style={styles.alerts} onPress={startSwing}>
              <View style={styles.alerts__count}>
                <Text style={styles.alert__text}>3</Text>
              </View>
              <Image
                alt="alerts"
                style={styles.imageAlerts}
                resizeMode="cover"
                source={assets.image.png.alerts}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>

        {isCustomer && (
          <>
            <View style={styles.promos}>
              <LinearGradient
                colors={[theme.gradient.color1, theme.gradient.color2]}
                style={styles.bgpromos}
              >
                <View style={styles.promos__label}>
                  <Text style={{ color: "#7EA74C" }}>New</Text>
                </View>
                <Text style={styles.promos__title}>
                  Register Your service via chat
                </Text>

                {getIconById("pleca")}

                <View style={styles.bg_person}>
                  {getIconById("supportPerson")}
                </View>
              </LinearGradient>
            </View>

            <View style={styles.tabViewContainer}>
              <Text style={styles.titleCategories}>Choose a category</Text>

            </View>
            <ServiceListScreenCt />
          </>
        )}
        {!isCustomer && userInfo.type === "supervisor" && (
          <ServiceListScreenSp />
        )}

        {!isCustomer && userInfo.type === "employee" && (
          <ServiceListScreenEmployee />
        )}
        {!isCustomer && userInfo.type === "manager" && (
          <ServiceListScreenManager />
        )}

      </View>
    </ScrollView>
  );
}
