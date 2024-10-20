import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useCallback, useState } from "react";
import { LayoutAnimation, TouchableOpacity, View } from "react-native";
import { Service } from "../../../../api/service";
import { ItemServiceManager } from "../../../../components/core/items/ItemService";
import StyledText from "../../../../utils/globalstyle";
import { getIconById } from "../../../../utils/util";
import { useAuth } from "../../../Auth/hooks";
import { styles } from "./ServiceListScreenManager.styles";
import { LoadingScreen } from "../../../../components/core/LoadingScreen";
import { screens } from "../../../../utils";



export const ServiceListScreenManager = () => {
  const [selectedTab, setSelectedTab] = useState("services");
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);
  const controllerService = new Service();
  const { accessToken } = useAuth();
  const navigation = useNavigation();



  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setIsLoading(true)
          const { data } = await controllerService.findAllServicesByManager(accessToken);
          setServices(data);
        } catch (error) {

          setServices([]);
        } finally {
          setIsLoading(false)
        }
      })();
    }, [])
  );


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
      <View style={{ flexDirection: "row-reverse" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.tab.services.root)}
        >
          <StyledText font14pt regularGreen>
            View All
          </StyledText>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        {routes.map((route) => (
          selectedTab === route.key ? (
            <LinearGradient
              key={route.key}
              colors={["#CEDC39", "#7DA74D"]}
              style={[selectedTab === "services" ? { marginRight: 10 } : {}, styles.gradient]}
            >
              <TouchableOpacity
                key={route.key}
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
          <View style={{ minHeight: 400 }}>
            <LoadingScreen />
          </View>
        ) : selectedTab === "services" ? (
          services.length > 0 ? (
            services.map((item) => (
              <ItemServiceManager key={item.id} item={item} />
            ))
          ) : (
            <View style={{ flexGrow: 1, justifyContent: "center", alignItems: "center", minHeight: 400 }}>
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
