import React, { useState } from "react";
import { useAuth } from "../../modules/Auth/hooks";
import { styles } from "./ReportsScreen.Styles";
import { Header } from "../../components/core/Header";
import { Image, View, Dimensions, ScrollView, Text, TouchableOpacity } from "react-native";
import { assets } from "../../assets";
import StyledText, { StyledGradientButtonSmall } from "../../utils/globalstyle";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


export function ReportsScreen() {
  const { logout } = useAuth();

  const initialLayout = { width: Dimensions.get('window').width };


  const CreatedRoute = () => (
    <ScrollView style={styles.Container}>
            
        <StyledText medium> Services </StyledText>
        
      <TouchableOpacity >
        <Text  style={styles.Textgreen}>services traking  </Text>
      </TouchableOpacity>


      <View style={{ flexDirection: 'column', }}>
        <View style={styles.containertwo}>
          <Image alt='categoria' style={styles.categoriauno} source={assets.image.png.categoriaUno} />
          <View style={styles.containerText}>
            <StyledText boldGray>services in progress</StyledText>
            <StyledText regularGray>Cleaning the lobby area</StyledText>
            <View style={styles.ContenidoMontly}>
              <StyledText regularGray>Monthly Total : </StyledText>
              <Text style={styles.numero1}>100</Text>
            </View>
          </View>
        </View>

        <View style={styles.containertwo}>
          <Image alt='categoria' style={styles.categoriauno} source={assets.image.png.categoriaUno} />
          <View style={styles.containerText}>
            <StyledText boldGray>Cancelled Services</StyledText>
            <StyledText regularGray>Cleaning the lobby area</StyledText>
            <View style={styles.ContenidoMontly}>
              <StyledText regularGray>Monthly Total : </StyledText>
              <Text style={styles.numero2}>120</Text>
            </View>
          </View>
        </View>

        <View style={styles.containertwo}>
          <Image alt='categoria' style={styles.categoriauno} source={assets.image.png.categoriaUno} />
          <View style={styles.containerText}>
            <StyledText boldGray>Qualified Services</StyledText>
            <View style={styles.containerStart}>
              <StyledText regularGray>Cleaning the lobby area</StyledText>
              <Image alt='start' style={styles.start} source={assets.image.png.iconEstrella} />
            </View>
            <View style={styles.ContenidoMontly}>
              <StyledText regularGray>Monthly Total : </StyledText>
              <Text style={styles.numero3}>146</Text>
            </View>
          </View>
        </View>

        <View style={styles.Containertree}>
          <View>
            <StyledText medium> Attended Services</StyledText>
          </View>
          <Text style={styles.Textgreen}>Montly</Text>
          <View >
            <StyledText boldGray> Montly Services</StyledText>
            <Image source={assets.image.png.Group} />
          </View>
          <Text style={styles.Textgreen}>Weekly</Text>
          <View >
            <StyledText boldGray> Weekly Services</StyledText>
            <Image source={assets.image.png.Group} />
          </View>
          <Text style={styles.Textgreen}>Day</Text>
          <View >
            <StyledText boldGray> Day Services</StyledText>
            <Image source={assets.image.png.Group} />
          </View>
        </View>

        <View style={styles.Containerforth}>
          <View>
            <StyledText medium >Most Ordered Products</StyledText>
          </View>
          <View style={styles.containertwo}>
            <Image alt='categoria' style={styles.categoriauno} source={assets.image.png.categoriaUno} />
            <View style={styles.containerText}>
              <StyledText boldGray>Product 1</StyledText>
              <StyledText regularGray>Lorem Ipsum simply</StyledText>
              <View style={styles.Contenidoranking}>
                <Image style={styles.startranking} source={assets.image.png.iconEstrella} />
                <Text style={styles.ranking}>4.8 </Text>
              </View>
              <View style={styles.Container__Total}>
                <StyledText regularGray>Total:</StyledText>
                <Text style={styles.Num__Total}>146</Text>
              </View>
            </View>
          </View>

          <View style={styles.containertwo}>
            <Image alt='categoria' style={styles.categoriauno} source={assets.image.png.categoriaUno} />
            <View style={styles.containerText}>
              <StyledText boldGray>Product 2</StyledText>
              <StyledText regularGray>Lorem Ipsum simply</StyledText>
              <View style={styles.Contenidoranking}>
                <Image style={styles.startranking} source={assets.image.png.iconEstrella} />
                <Text style={styles.ranking}>4.8 </Text>
              </View>
              <View style={styles.Container__Total}>
                <StyledText regularGray>Total:</StyledText>
                <Text style={styles.Num__Total}>119</Text>
              </View>
            </View>
          </View>

          <View style={styles.containertwo}>
            <Image alt='categoria' style={styles.categoriauno} source={assets.image.png.categoriaUno} />
            <View style={styles.containerText}>
              <StyledText boldGray>Product 3</StyledText>
              <StyledText regularGray>Lorem Ipsum simply</StyledText>
              <View style={styles.Contenidoranking}>
                <Image style={styles.startranking} source={assets.image.png.iconEstrella} />
                <Text style={styles.ranking}>4.8 </Text>
              </View>
              <View style={styles.Container__Total}>
                <StyledText regularGray>Total:</StyledText>
                <Text style={styles.Num__Total}>95</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );


  const CancelledRoute = () => (
    <View style={styles.Container}>
      <Text>Contanido de cancelled</Text>
    </View>
  );

  const RankingsRoute = () => (
    <View style={styles.Container}>
      <Text>Rankings  contenido</Text>
    </View>
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'created', title: 'Created' },
    { key: 'cancelled', title: 'Cancelled' },
    { key: 'rankings', title: 'Rankings' },
  ]);

  const renderScene = SceneMap({
    created: CreatedRoute,
    cancelled: CancelledRoute,
    rankings: RankingsRoute,
  });

  return (
    <>
      <Header title={"Tracking and Reporting"} subtitle={"MGS Supply & Services"} />
     
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'transparent', height: 0 }}
            style={{ backgroundColor: '#fff', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 }}
            renderLabel={({ route, focused, color }) => (

              <StyledGradientButtonSmall
                text={route.title}
                focused={focused}
              />
            )}
          />
        )}
      />
    </>
  );
}
