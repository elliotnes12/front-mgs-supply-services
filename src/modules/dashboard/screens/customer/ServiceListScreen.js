import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { assets } from '../../../../assets';
import { styles } from './ServiceListScreen.styles';


const RenderServices = () => (
  <View style={styles.scene}>

    <View style={styles.options}>
      <Text style={styles.options__title}>Services Used</Text>
      <TouchableOpacity>
        <Text style={styles.options__all}>ViewAll</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.item}>
      <View style={styles.item__img}>
        <Image alt='categoria' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
      </View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>Office Cleaning</Text>
        <Text style={styles.item_subtitle}>Cleaning the lobby area</Text>
        <View style={styles.item__raiting}>
          <Image alt='icon-star-raiting' resizeMode="cover" source={assets.image.png.iconEstrella} />
          <Text style={styles.item__raitingtext} >4.8</Text>
        </View>

        <View style={styles.item__date}>
          <Image alt='icon-calendar' resizeMode="cover" source={assets.image.png.calendar} />
          <Text style={styles.item__datetext} >May 12, 2024</Text>
        </View>

        <TouchableOpacity style={styles.item__flechaContainer}>
          <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
        </TouchableOpacity>
      </View>
    </View>
    
    <View style={styles.item}>
      <View style={styles.item__img}>
        <Image alt='categoria' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
      </View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>Office Cleaning</Text>
        <Text style={styles.item_subtitle}>Cleaning the lobby area</Text>
        <View style={styles.item__raiting}>
          <Image alt='icon-star-raiting' resizeMode="cover" source={assets.image.png.iconEstrella} />
          <Text style={styles.item__raitingtext} >4.8</Text>
        </View>

        <View style={styles.item__date}>
          <Image alt='icon-calendar' resizeMode="cover" source={assets.image.png.calendar} />
          <Text style={styles.item__datetext} >May 12, 2024</Text>
        </View>

        <TouchableOpacity style={styles.item__flechaContainer}>
          <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
        </TouchableOpacity>
      </View>
    </View>
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


const getIconFocus = (label) => {
  if (label === "Services") {
    return assets.image.png.iconServices;
  } else if (label === "Orders") {
    return assets.image.png.documentosdos;
  } else if (label === "Rating") {
    return assets.image.png.comentariosdos;
  }
};

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
        return <RenderServices />;
      case 'second':
        return <RenderOrders />;
      case 'third':
        return <RenderRaiting />;
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
