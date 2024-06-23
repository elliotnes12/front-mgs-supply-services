import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from '../../../../assets';
import { styles } from './ServiceListScreenSupervisor.styles';
import { tabIds } from '../../../../utils';


const RenderLastServices = () => (
  <View style={styles.scene}>
    {/* Item 1 */}
    <View style={styles.item}>
      <View style={styles.item__img}>
        <Image alt='categoria' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
      </View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>Office Cleaning</Text>
        <Text>Cleaning the lobby area</Text>
        <Text style={styles.fecha}>May 12, 2024</Text>
        <Text >Estatus:</Text>
        <View style={styles.item__paddingTop15}></View>
        <TouchableOpacity style={styles.item__flechaContainer}>
          <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item__calendario}>
          <Image alt='calender' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.calendar} />
        </TouchableOpacity>
        <View style={styles.aprovado}>
          <Image alt='aprovado' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.aprovado} />
        </View>
        <TouchableOpacity>
          <Text style={styles.progress}>In Progress</Text>
        </TouchableOpacity>

      </View>
    </View>
    {/* Item 2 */}
    <View style={styles.item}>
      <View style={styles.item__img}>
        <Image alt='categoria' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
      </View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>Office Cleaning</Text>
        <Text>Cleaning the lobby area</Text>
        <Text style={styles.fecha}>May 12, 2024</Text>
        <Text>Estatus:</Text>
        <View style={styles.item__paddingTop15}></View>
        <TouchableOpacity style={styles.item__flechaContainer}>
          <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item__calendario}>
          <Image alt='calender' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.calendar} />
        </TouchableOpacity>
        <View style={styles.canceled}>
          <Image alt='aprovado' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.aprovado} />
        </View>
        <TouchableOpacity>
          <Text style={styles.progress}>canceled</Text>
        </TouchableOpacity>

      </View>
    </View>

    <View style={styles.item}>
      <View style={styles.item__img}>
        <Image alt='categoria' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
      </View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>Office Cleaning</Text>
        <Text>Cleaning the lobby area</Text>
        <Text style={styles.fecha}>May 12, 2024</Text>
        <Text>Estatus:</Text>
        <View style={styles.item__paddingTop15}></View>
        <TouchableOpacity style={styles.item__flechaContainer}>
          <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item__calendario}>
          <Image alt='calender' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.calendar} />
        </TouchableOpacity>
        <View style={styles.success}>
          <Image alt='aprovado' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.aprovado} />
        </View>
        <TouchableOpacity>
          <Text style={styles.progress}>success</Text>
        </TouchableOpacity>

      </View>
    </View>
  </View>
);

const RenderLastProducts = () => (
  <View style={[styles.scene, styles.backgroundWhite]}>
    <Text>Contenido de la segunda pestaña</Text>
  </View>
);

const getIconFocus = (key) => {
  if (key === tabIds.TAB_ID_SERVICES) {
    return assets.image.png.documentosdos;
  } else if (key === tabIds.TAB_ID_PRODUCTS) {
    return assets.image.png.documentosdos;
  }
};

// Function to get the non-focus icon based on the label
const getIcon = (key) => {
  if (key === tabIds.TAB_ID_SERVICES) {
    return assets.image.png.documentouno;
  } else if (key === tabIds.TAB_ID_PRODUCTS) {
    return assets.image.png.documentouno;
  }
};

const initialLayout = { width: "100%" };

export const ServiceListScreenSp = () => {
  const [index, setIndex] = React.useState(0);

  // Define the routes
  const routes = [
    { key: tabIds.TAB_ID_SERVICES, title: 'services', label: 'services' },
    { key: tabIds.TAB_ID_PRODUCTS, title: 'products', label: 'Orders' },
  ];

  // Render the scene based on the route key
  const renderScene = ({ route }) => {
    switch (route.key) {
      case tabIds.TAB_ID_SERVICES:
        return <RenderLastServices />;
      case tabIds.TAB_ID_PRODUCTS:
        return <RenderLastProducts />;
      default:
        return null;
    }
  };

  // Customize the appearance of the tab bar
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

            <Image style={styles.iconServices} resizeMode="cover" source={getIconFocus(route.key)} />
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
        renderTabBar={renderTabBar}
      />
    </View>
  );
}
