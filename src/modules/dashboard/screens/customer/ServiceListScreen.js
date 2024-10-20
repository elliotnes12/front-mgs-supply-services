import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useEffect, useState } from "react";
import { LayoutAnimation, TouchableOpacity, View } from "react-native";
import { Service } from "../../../../api/service";
import { ItemService } from "../../../../components/core/items/ItemService";
import { LoadingScreen } from "../../../../components/core/LoadingScreen";
import { screens } from "../../../../utils";
import StyledText from "../../../../utils/globalstyle";
import { getIconById } from "../../../../utils/util";
import { useAuth } from "../../../Auth/hooks";
import { styles } from "./ServiceListScreen.styles";

export const ServiceListScreenCt = ({ setInfoRating, setIsModalRating, setRefreshServices }) => {
  const [selectedTab, setSelectedTab] = useState("services");
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { accessToken, userInfo } = useAuth();
  const controllerService = new Service();


  const loadServices = async () => {
    try {
      setIsLoading(true);
      const { data } = await controllerService.findAllServicesByCustomer(
        accessToken,
        userInfo?._id
      );
      setServices(data);
    } catch (error) {
      setServices([]);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadServices();
    }, [])
  );

  useEffect(() => {
    setRefreshServices(() => loadServices);
  }, [setRefreshServices]);

  const routes = [
    { key: "services", label: "Services", icon: "iconDocument" },
    { key: "products", label: "Products", icon: "iconDocument" },
  ];

  const handleTabChange = (tabKey) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedTab(tabKey);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10 }}>
        <StyledText font17pt boldGray>Services Generated</StyledText>
      </View>
      {services?.length > 0 &&
        <View style={{ flexDirection: "row-reverse" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.tab.services.root)}
          >
            <StyledText font14pt regularGreen>
              View All
            </StyledText>
          </TouchableOpacity>
        </View>
      }
      <View style={styles.tabContainer}>
        {routes.map((route) => (
          selectedTab === route.key ? (
            <LinearGradient
              key={route.key}
              colors={["#CEDC39", "#7DA74D"]}
              style={[selectedTab === "services" ? { marginRight: 10 } : {}, styles.gradient]}
            >
              <TouchableOpacity
                onPress={() => handleTabChange(route.key)}
                style={[styles.tabButtonActive, { flexDirection: "row" }]}
              >
                <View style={{ width: 20, height: 20, marginRight: 5 }}>
                  {getIconById(route.icon + "White")}
                </View>
                <StyledText regularWhite>{route.label}</StyledText>
              </TouchableOpacity>
            </LinearGradient>
          ) : (
              <TouchableOpacity
                key={route.key}
                onPress={() => handleTabChange(route.key)}
                style={[styles.tabButton, { flexDirection: "row" }]}
              >
                <View style={{ width: 20, height: 20, marginRight: 5 }}>
                  {getIconById(route.icon + "Gray")}
                </View>
                <StyledText regularGray>{route.label}</StyledText>
              </TouchableOpacity>
            )
        ))}
      </View>

      <View style={styles.contentContainer}>
        {isLoading ? (
          <LoadingScreen />
        ) : selectedTab === "services" ? (
          services.length > 0 ? (
            services.map((item) => (
              <ItemService setIsModalRating={setIsModalRating} setInfoRating={setInfoRating} key={item.id} item={item} />
            ))
          ) : (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <StyledText regularGreen>No services available.</StyledText>
            </View>
          )
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StyledText regularGreen>No products available.</StyledText>
          </View>
        )}
      </View>
    </View>
  );
};
