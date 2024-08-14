import React, { useState } from "react";
import { useAuth } from "../../modules/Auth/hooks";
import { styles } from "./ReportsScreen.Styles";
import { Header } from "../../components/core/Header";
import { Image, View, Dimensions, ScrollView, Text } from "react-native";
import { assets } from "../../assets";
import StyledText, { StyledGradientButtonSmall } from "../../utils/globalstyle";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { getIconById } from "../../utils/util";

export function ReportsScreen() {
  const { logout } = useAuth();

  const initialLayout = { width: Dimensions.get("window").width };

  const CreatedRoute = () => (
    <ScrollView>
      <View style={{ paddingHorizontal: 20, flex: 1, paddingBottom: 30 }}>
        <StyledText headerGray> Services </StyledText>

        <StyledText font14pt regularGreen>
          Services Traking
        </StyledText>

        <View style={{ flexDirection: "column" }}>
          <View style={styles.item}>
            <View style={styles.minImg}>{getIconById("minService")}</View>
            <View style={styles.containerText}>
              <StyledText boldGray>Services in progress</StyledText>
              <StyledText regularGray>Cleaning the lobby area</StyledText>
              <View style={styles.ContenidoMontly}>
                <StyledText regularGray>Monthly Total : </StyledText>
                <StyledText bold gold>
                  120
                </StyledText>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.minImg}>{getIconById("minService")}</View>
            <View style={styles.containerText}>
              <StyledText boldGray>Cancelled Services</StyledText>
              <StyledText regularGray>Cleaning the lobby area</StyledText>
              <View style={styles.ContenidoMontly}>
                <StyledText regularGray>Monthly Total : </StyledText>
                <StyledText bold brightRed>
                  120
                </StyledText>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.minImg}>{getIconById("minService")}</View>
            <View style={styles.containerText}>
              <StyledText boldGray>Qualified Services</StyledText>
              <StyledText regularGray>Cleaning the lobby area</StyledText>
              <View style={styles.ContenidoMontly}>
                <StyledText regularGray>Monthly Total : </StyledText>
                <StyledText bold brightBlue>
                  120
                </StyledText>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <StyledText headerGray> Attended Services</StyledText>
          </View>
          <View style={styles.Containertree}>
            <StyledText font14pt regularGreen>
              Montly
            </StyledText>
            <View>
              <StyledText boldGray> Montly Services</StyledText>
              <Image source={assets.image.png.Group} />
            </View>
            <StyledText font14pt regularGreen>
              Weekly
            </StyledText>
            <View>
              <StyledText boldGray> Weekly Services</StyledText>
              <Image source={assets.image.png.Group} />
            </View>
            <StyledText font14pt regularGreen>
              Day
            </StyledText>
            <View>
              <StyledText boldGray> Day Services</StyledText>
              <Image source={assets.image.png.Group} />
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <StyledText headerGray>Most Ordered Products</StyledText>
          </View>

          <View style={styles.Containerforth}>
            <View style={styles.item}>
              <View style={styles.minImg}>{getIconById("minService")}</View>
              <View style={styles.containerText}>
                <StyledText boldGray>Product 1</StyledText>
                <StyledText regularGray>Lorem Ipsum simply</StyledText>
                <View style={styles.Contenidoranking}>
                  <Image
                    style={styles.startranking}
                    source={assets.image.png.iconRaiting}
                  />
                  <Text style={styles.ranking}>4.8 </Text>
                </View>
                <View style={styles.item__total}>
                  <StyledText regularGray>Total:</StyledText>
                  <Text style={styles.Num__Total}>146</Text>
                </View>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.minImg}>{getIconById("minService")}</View>
              <View style={styles.containerText}>
                <StyledText boldGray>Product 2</StyledText>
                <StyledText regularGray>Lorem Ipsum simply</StyledText>
                <View style={styles.Contenidoranking}>
                  <View style={styles.startranking}>
                    {getIconById("iconRaiting")}
                  </View>
                  <Text style={styles.ranking}>4.8</Text>
                </View>
                <View style={styles.item__total}>
                  <StyledText regularGray>Total:</StyledText>
                  <Text style={styles.Num__Total}>119</Text>
                </View>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.minImg}>{getIconById("minService")}</View>
              <View style={styles.containerText}>
                <StyledText boldGray>Product 3</StyledText>
                <StyledText regularGray>Lorem Ipsum simply</StyledText>
                <View style={styles.Contenidoranking}>
                  <View style={styles.startranking}>
                    {getIconById("iconRaiting")}
                  </View>
                  <Text style={styles.ranking}>4.8 </Text>
                </View>
                <View style={styles.item__total}>
                  <StyledText regularGray>Total:</StyledText>
                  <Text style={styles.Num__Total}>95</Text>
                </View>
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
      <Text>Rankings contenido</Text>
    </View>
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "created", title: "Created" },
    { key: "cancelled", title: "Cancelled" },
    { key: "rankings", title: "Rankings" },
  ]);

  const renderScene = SceneMap({
    created: CreatedRoute,
    cancelled: CancelledRoute,
    rankings: RankingsRoute,
  });

  return (
    <>
      <Header
        title={"Tracking and Reporting"}
        subtitle={"MGS Supply & Services"}
      />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "transparent", height: 0 }}
            tabStyle={{ paddingLeft: 30 }}
            style={{
              backgroundColor: "#fff",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            }}
            pressColor="transparent"
            pressOpacity={1}
            renderLabel={({ route, focused, color }) => (
              <StyledGradientButtonSmall text={route.title} focused={focused} />
            )}
          />
        )}
      />
    </>
  );
}
