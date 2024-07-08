import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './ServiceListScreenManager.styles';
import { screens, tabIds } from '../../../../utils';
import { getIcon } from '../../../../utils/util';
import { useNavigation } from '@react-navigation/native';
import { ItemServiceManager } from '../../../../components/core/items/ItemServiceManager';

const data = [
  { title: "Office Cleaning", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'progress' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'cancel' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'success' }
]


const initialLayout = { width: "100%" };


const RenderLastServices = ({ navigation }) => (
  <>

    <View style={styles.options}>
      <TouchableOpacity onPress={() => navigation.navigate(screens.tab.services.root)}>
        <Text style={styles.options__all}>View All</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={data}
      renderItem={ItemServiceManager}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatListContainer}
    />

  </>
);


const RenderLastProducts = () => (
  <View style={[styles.scene, styles.backgroundWhite]}>
    <Text>Contenido de la segunda pestaña</Text>
  </View>
);


export const ServiceListScreenManager = () => {
  const [index, setIndex] = React.useState(0);

  const navigation = useNavigation();

  const routes = [
    { key: tabIds.TAB_ID_SERVICES, title: 'services', label: 'services' },
    { key: tabIds.TAB_ID_PRODUCTS, title: 'products', label: 'Orders' },

  ];


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
      pressColor='transparent'
      style={styles.tabBarStyle}


      tabStyle={styles.tabStyle}
      renderLabel={({ route, focused }) => (
        focused ? (
          <LinearGradient
            colors={['#CEDC39', '#7DA74D']}
            style={styles.gradient}
          >

            <Image style={styles.iconServices} resizeMode="cover" source={getIcon(route.key + "-focus")} />
            <Text style={styles.tabTextFocused}>
              {route.label}
            </Text>
          </LinearGradient>
        ) : (
          <View style={styles.tabItem}>
            <Image style={styles.iconServices} resizeMode="cover" source={getIcon(route.key)} />
            <Text style={styles.tabText}>
              {route.label}
            </Text>
          </View>

        )
      )}

    />
  );

  return (
    <View style={styles.tabViewContainer}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}
