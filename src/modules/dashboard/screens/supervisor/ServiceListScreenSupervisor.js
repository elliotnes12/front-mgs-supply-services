import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { ItemServiceSupervisor } from "../../../../components/core/items/ItemService";
import { screens, tabIds } from "../../../../utils";
import { getIconById } from "../../../../utils/util";
import { styles } from "./ServiceListScreenSupervisor.styles";

const data = [
  {
    title: "Office Cleaning",
    subTitle: "Cleaning the lobby area",
    date: "May 12, 2024",
    status: "progress",
  },
  {
    title: "Office Cleaning 2",
    subTitle: "Cleaning the lobby area",
    date: "May 12, 2024",
    status: "cancel",
  },
  {
    title: "Office Cleaning 2",
    subTitle: "Cleaning the lobby area",
    date: "May 12, 2024",
    status: "success",
  },
];

const initialLayout = { width: "100%" };

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

    {map(data, (element, id) => {
      return <ItemServiceSupervisor key={id} item={element} />;
    })}
  </>
);

const RenderLastProducts = () => (
  <View style={[styles.scene, styles.backgroundWhite]}>
    <Text>Contenido de la segunda pestaña</Text>
  </View>
);

export const ServiceListScreenSp = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);

  const navigation = useNavigation();

  const routes = [
    { key: tabIds.TAB_ID_SERVICES, title: "services", label: "services" },
    { key: tabIds.TAB_ID_PRODUCTS, title: "products", label: "Orders" },
  ];

  useEffect(() => {
    switch (routes[index].key) {
      case tabIds.TAB_ID_SERVICES:
        setHeight((data.length + 1) * 130);
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
            {getIconById("")}
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
