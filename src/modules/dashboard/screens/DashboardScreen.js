import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Service } from "../../../api/service";
import RatingModal from "../../../components/core/Modal/RatingModal";
import { ENV, screens } from "../../../utils";
import StyledText from "../../../utils/globalstyle";
import { theme } from "../../../utils/theme";
import { getIconById } from "../../../utils/util";
import { useAuth } from "../../Auth/hooks";
import { styles } from "../styles/dashboard.styles";
import { ServiceListScreenCt } from "./customer/ServiceListScreen";
import { ServiceListScreenEmployee } from "./employee/ServiceListScreenEmployee";
import { ServiceListScreenManager } from "./manager/ServicesListScreenManager";
import { ServiceListScreenSupervisor } from "./supervisor/ServiceListScreenSupervisor";

export function DashboardScreen() {
  const { userInfo, isCustomer, accessToken } = useAuth();

  const { name } = userInfo;
  const [infoRating, setInfoRating] = useState({})
  const [isModalRating, setIsModalRating] = useState(false)
  const swingAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const controllerService = new Service();
  const [isLoading, setIsLoading] = useState(false)
  const [refreshServices, setRefreshServices] = useState(() => () => { });

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

  const sendRating = async (rating, comments) => {

    try {
      setIsLoading(true)
      const { meta } = await controllerService.update(accessToken,
        {
          id: infoRating,
          rating: rating,
          comments: comments
        });

      if (meta.code != 200) {
        throw new Error();
      }

      refreshServices();

    }
    catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      setIsModalRating(false)
    }
  }

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
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        alwaysBounceVertical={false}
      >
        <DashboardHeader />
        <View style={styles.background}>
          {isCustomer && (
            <>
              <Banner />
              <View style={{ marginVertical: 10 }}>
                <StyledText bold font20pt>Choose a category</StyledText>
              </View>
              <ServiceListScreenCt
                setRefreshServices={setRefreshServices}
                setIsModalRating={setIsModalRating}
                setInfoRating={setInfoRating} />
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

      <RatingModal
        visible={isModalRating}
        isLoading={isLoading}
        onClose={() => setIsModalRating(false)}
        onSubmit={sendRating}
      />
    </View>
  );
}
