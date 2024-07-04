import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { assets } from '../../../../assets';
import { styles } from './ServiceListScreen.styles';
import { FlatList } from 'native-base';
import { getIcon } from '../../../../utils/util';
import { stylesGlobal } from '../../../styles/global.style';
import { screens, tabIds } from '../../../../utils';
import { useNavigation } from '@react-navigation/native';
import { ItemService } from '../../../../components/core/ItemService';


const data = [
  { id: '1', title: "Office Cleaning", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
  { id: '2', title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
  { id: '3', title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' }
];


const initialLayout = { width: "100%" };




const RenderServices = ({ navigation }) => (
  <>
    <View style={styles.options}>
      <Text style={styles.options__title}>Services Used</Text>
      <TouchableOpacity onPress={() => navigation.navigate(screens.tab.services.root)}>
        <Text style={styles.options__all}>ViewAll</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={data}
      renderItem={({ item }) => <ItemService item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatListContainer}
    />
  </>
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
  const [index, setIndex] = React.useState(0);
  
  const navigation = useNavigation();

  const routes = [
    { key: tabIds.TAB_ID_SERVICES, title: 'services', label: 'services' },
    { key: tabIds.TAB_ID_PRODUCTS, title: 'products', label: 'Orders' },
    { key: tabIds.TAB_ID_RAITING, title: 'raiting', label: 'Raiting' },
  ];


  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'services':
        return <RenderServices navigation={navigation} />;
      case 'second':
        return <RenderOrders />;
      case 'third':
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
            <Image style={styles.iconServices} resizeMode="cover" source={getIcon(route.key + "-focus")} />
            <Text style={styles.tabTextFocused}>
              {route.title}
            </Text>
          </LinearGradient>
        ) : (
          <View style={styles.tabItem}>
            <Image style={styles.iconServices} resizeMode="cover" source={getIcon(route.key)} />
            <Text style={styles.tabText}>
              {route.title}
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
