import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { styles } from './ServiceListScreen.styles';
import { getIcon } from '../../../../utils/util';
import { screens, tabIds } from '../../../../utils';
import { useNavigation } from '@react-navigation/native';
import { ItemService } from '../../../../components/core/items/ItemService';
import { map } from "lodash";
import { useEffect, useState } from 'react';

const data = [
  { id: '1', title: "Office Cleaning", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
  { id: '2', title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
  { id: '3', title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' }
];

const initialLayout = { width: "100%" };

const RenderServices = ({ navigation }) => (
  <View style={{ flexGrow: 1 }}>
    <View style={styles.options}>
      <Text style={styles.options__title}>Services Used</Text>
      <TouchableOpacity onPress={() => navigation.navigate(screens.tab.services.root)}>
        <Text style={styles.options__all}>View All</Text>
      </TouchableOpacity>
    </View>
    {map(data, (item) => <ItemService key={item.id} item={item} />)}
  </View>
);

const RenderOrders = () => (
  <View style={[styles.scene, styles.backgroundWhite]}>
    <Text>Contenido de la segunda pestaña</Text>
  </View>
);

const RenderRaiting = () => (
  <View style={[styles.scene, styles.backgroundWhite]}>
    <Text>Contenido de la tercera pestaña</Text>
  </View>
);

export const ServiceListScreenCt = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const navigation = useNavigation();

  const routes = [
    { key: tabIds.TAB_ID_SERVICES, title: 'services', label: 'services', icon: 'icon-service' },
    { key: tabIds.TAB_ID_PRODUCTS, title: 'products', label: 'Orders', icon: 'icon-order' },
    { key: tabIds.TAB_ID_RAITING, title: 'raiting', label: 'Raiting', icon: 'icon-raiting' },
  ];

  useEffect(() => {
    switch (routes[index].key) {
      case tabIds.TAB_ID_SERVICES:
        setHeight((data.length + 1) * 140);
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
        return <RenderServices navigation={navigation} />;
      case tabIds.TAB_ID_PRODUCTS:
        return <RenderOrders />;
      case tabIds.TAB_ID_RAITING:
        return <RenderRaiting />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      pressColor='transparent'
      style={styles.tabBarStyle}
      scrollEnabled
      tabStyle={styles.tabStyle}
      renderLabel={({ route, focused }) => (
        focused ? (
          <LinearGradient
            colors={['#CEDC39', '#7DA74D']}
            style={styles.gradient}
          >
            <Text style={styles.tabTextFocused}>
              {route.title}
            </Text>
          </LinearGradient>
        ) : (
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>
              {route.title}
            </Text>
          </View>
        )
      )}
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
}
