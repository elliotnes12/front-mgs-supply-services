import * as React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from '../../../../assets';
import { styles } from './ServiceListScreen.styles';


const FirstRoute = () => (
  <View style={styles.scene}>
    <Text style={styles.title}>Latest Services</Text>
    <Text style={styles.viewAll}>View All</Text>
    {/* Item 1 */}
    <View style={styles.item}>
      <View style={styles.item__img}>
        <Image style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
      </View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>Office Cleaning</Text>
        <Text>Cleaning the lobby area</Text>
        <View style={styles.item__paddingTop15}></View>
        <TouchableOpacity style={styles.item__flechaContainer}>
          <Image style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
        </TouchableOpacity>
      </View>
    </View>
    {/* Item 2 */}
    <View style={styles.item}>
      <View style={styles.item__img}>
        <Image style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
      </View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>Office Cleaning</Text>
        <Text>Cleaning the lobby area</Text>
        <View style={styles.item__paddingTop15}></View>
        <TouchableOpacity style={styles.item__flechaContainer}>
          <Image style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

// Function component for the SecondRoute
const SecondRoute = () => (
  <View style={[styles.scene, styles.backgroundWhite]}>
    <Text>Contenido de la segunda pestaña</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, styles.backgroundWhite]}>
    <Text>Contenido de la tercera pestaña</Text>
  </View>
);


// Function to get the focus icon based on the label
const getIconFocus = (label) => {
  if (label === "Services") {
    return assets.image.png.iconServices;
  } else if (label === "Orders") {
    return assets.image.png.documentosdos;
  } else if (label === "Rating") {
    return assets.image.png.comentariosdos;
  }
};

// Function to get the non-focus icon based on the label
const getIcon = (label) => {
  if (label === "Services") {
    return assets.image.png.maletauno;
  } else if (label === "Orders") {
    return assets.image.png.documentouno;
  } else if (label === "Rating") {
    return assets.image.png.comentariosuno;
  }
};

const initialLayout = { width: "100%" };

export const ServiceListScreenCt = () => {
  const [index, setIndex] = React.useState(0);

  // Define the routes
  const routes = [
    { key: 'first', title: 'Services' },
    { key: 'second', title: 'Orders' },
    { key: 'third', title: 'Rating' },
  ];

  // Render the scene based on the route key
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute />;
      case 'third':
        return <ThirdRoute />;
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
      scrollEnabled
      tabStyle={styles.tabStyle}
      renderLabel={({ route, focused }) => (
        focused ? (
          <LinearGradient
            colors={['#CEDC39', '#7DA74D']}
            style={styles.gradient}
          >
            <Image style={styles.iconServices} resizeMode="cover" source={getIconFocus(route.title)} />
            <Text style={styles.tabTextFocused}>
              {route.title}
            </Text>
          </LinearGradient>
        ) : (
          <View style={styles.tabItem}>
            <Image style={styles.iconServices} resizeMode="cover" source={getIcon(route.title)} />
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
