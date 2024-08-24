import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { ItemServiceSupervisor } from "../../../../components/core/items/ItemService";
import { screens, tabIds } from "../../../../utils";
import { getIconById } from "../../../../utils/util";
import { styles } from "./ServiceListScreenSupervisor.styles";
import { Service } from "../../../../api/service";
import { useAuth } from "../../../Auth/hooks";



export const ServiceListScreenSupervisor = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const controllerService = new Service();
  const [services, setServices] = useState([])
  const navigation = useNavigation();
  const { accessToken } = useAuth();
  const initialLayout = { width: "100%" };

  const routes = [
    { key: tabIds.TAB_ID_SERVICES, title: "services", label: "services" },
    { key: tabIds.TAB_ID_PRODUCTS, title: "products", label: "Orders" },
  ];

  useEffect(() => {

    (async () => {
      try {

        const { data } = await controllerService.findAllServices(accessToken);

        setServices(data)


      } catch (error) {
        setServices([]);
      }
    })();

  }, []);

  useEffect(() => {
    switch (routes[index].key) {
      case tabIds.TAB_ID_SERVICES:
        setHeight((services.length + 1) * 130);
        break;
      case tabIds.TAB_ID_PRODUCTS:
      case tabIds.TAB_ID_RAITING:
        setHeight(140);
        break;
      default:
        setHeight(0);
    }
  }, [index]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case tabIds.TAB_ID_SERVICES:
        return <RenderLastServices navigation={navigation} />;
      case tabIds.TAB_ID_PRODUCTS:
        return <RenderLastProducts />;
      default:
        return null;
    }
  };


  const RenderLastProducts = () => (
    <View style={[styles.scene, styles.backgroundWhite]}>
      <Text>Contenido de la segunda pestaña</Text>
    </View>
  );


  const RenderLastServices = ({ navigation }) => (
    <>
      <View style={styles.options}>
        <Text style={styles.options__title}>Services Generated</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.tab.services.root)}
        >
          <Text style={styles.options__all}>View All</Text>
        </TouchableOpacity>
      </View>
      {map(services, (element, id) => {
        return <ItemServiceSupervisor key={id} item={element} />;
      })}
    </>
  );


  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      pressColor="transparent"
      style={styles.tabBarStyle}
      tabStyle={styles.tabStyle}
      renderLabel={({ route, focused }) =>
        focused ? (
          <LinearGradient
            colors={["#CEDC39", "#7DA74D"]}
            style={styles.gradient}
          >
            <Text style={styles.tabTextFocused}>{route.label}</Text>
          </LinearGradient>
        ) : (
          <View style={styles.tabItem}>

            <Text style={styles.tabText}>{route.label}</Text>
          </View>
        )
      }
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      style={{ height: height }}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};
