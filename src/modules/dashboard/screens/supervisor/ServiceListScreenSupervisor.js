import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from '../../../../assets';
import { styles } from './ServiceListScreenSupervisor.styles';
import { screens, tabIds } from '../../../../utils';
import { getIcon } from '../../../../utils/util';
import { stylesGlobal } from '../../../styles/global.style';
import { useNavigation } from '@react-navigation/native';

const data = [
  { title: "Office Cleaning", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'progress' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'cancel' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'success' }
]


const initialLayout = { width: "100%" };

const renderStatus = (status) => {
  switch (status) {

    case 'progress':
      return (
        <>
          <View style={[stylesGlobal.itemHorizontal]}>
            <Text style={styles.item__estatus}>Estatus:</Text>
            <View style={[styles.estatus, styles.aprobado]} >
              <Text style={{ color: "#fff" }}>in progress</Text>
            </View>
          </View>
        </>
      )
    case 'cancel':
      return (
        <View style={[stylesGlobal.itemHorizontal]}>
          <Text style={styles.item__estatus}>Estatus:</Text>
          <View style={[styles.estatus, styles.canceled]} >
            <Text style={{ color: "#fff" }}>Canceled</Text>
          </View>
        </View>
      )
    case 'success':
      return (
        <View style={[stylesGlobal.itemHorizontal]}>
          <Text style={styles.item__estatus}>Estatus:</Text>
          <View style={[styles.estatus, styles.success]} >
            <Text style={{ color: "#fff" }}>Success</Text>
          </View>
        </View>
      )
  }
}

const renderItem = ({ item }) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.item__img}>
          <Image alt='categoria' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
        </View>
        <View style={styles.item__text}>
          <Text style={styles.item__title}>{item.title}</Text>
          <Text style={styles.item_subtitle}>{item.subTitle}</Text>

          <View style={styles.item__date}>
          <View style={[stylesGlobal.imageSmall]}>
              <Image alt='icon-calendar' resizeMode="cover" style={stylesGlobal.imageMin__img} source={assets.image.png.calendar} />
            </View>
            <Text style={styles.item__datetext} >{item.date}</Text>
          </View>

          {renderStatus(item.status)}

          <TouchableOpacity style={styles.item__flechaContainer}>
            <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}


const RenderLastServices = ({navigation}) => (
 <>
 <View style={styles.options}>
  <Text style={styles.options__title}>Services Generated</Text>
  <TouchableOpacity onPress={() => navigation.navigate(screens.tab.services.root)}>
    <Text style={styles.options__all}>View All</Text>
  </TouchableOpacity>
 </View>  

  
   <FlatList
      data={data}
      renderItem={renderItem}
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




export const ServiceListScreenSp = () => {
  const [index, setIndex] = React.useState(0);
 
  const navigation = useNavigation();

  const routes = [
    { key: tabIds.TAB_ID_SERVICES, title: 'services', label: 'services' },
    { key: tabIds.TAB_ID_PRODUCTS, title: 'products', label: 'Orders' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case tabIds.TAB_ID_SERVICES:
        return <RenderLastServices navigation={navigation}/>;
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

            <Image style={styles.iconServices} resizeMode="cover" source={getIcon(route.key+"-focus")} />
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
