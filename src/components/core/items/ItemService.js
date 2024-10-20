import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../modules/Auth/hooks";
import { stylesGlobal } from "../../../modules/styles/global.style";
import { getBusinessLabel, screens } from "../../../utils";
import StyledText from "../../../utils/globalstyle";
import { getIconById } from "../../../utils/util";
import { styles } from "../styles/ItemServive.style";
import { RenderStatusService } from "./RenderStatusService";

export function ItemService({ item, setInfoRating, setIsModalRating }) {

  const { userInfo } = useAuth();
  const navigation = useNavigation();


  return (
    <>
      <View style={styles.item}>
        {item.status == "completed" && item?.rating == "" &&

          <TouchableOpacity
            onPress={() => {
              setInfoRating(item.id)
              setIsModalRating(true)
            }}
            style={styles.bgRating} >
            <View style={{ width: 35, height: 35 }}>
              {getIconById("iconStar")}
            </View>
            <StyledText regularWhite>Rate Your Service</StyledText>
          </TouchableOpacity>
        }
        <View style={styles.item__img}>{getIconById("minService")}</View>
        <View style={styles.item__text}>
          <View style={{ flex: 2 }}>
            <Text style={styles.item__title}>{userInfo?.businessType} {item.category}</Text>
            <StyledText regularGray font10pt >
              {getBusinessLabel(userInfo?.businessType, item.category)}
            </StyledText>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              {item.rating != undefined && item.rating != "" &&
                <View style={{ flexDirection: "row", marginRight: 10 }}>
                  <View style={{ width: 15, height: 15, marginRight: 5 }}>
                    {getIconById("iconStar")}
                  </View>
                  <StyledText font12pt regularGray>
                    {item.rating}
                  </StyledText>
                </View>
              }
              <View style={styles.item__date}>
                <View style={[stylesGlobal.imageSmall]}>
                  {getIconById("iconCalendar")}
                </View>
                <View style={styles.item__datetext}>
                  <StyledText font10pt regularGray>
                    {item.formattedDate}
                  </StyledText>
                </View>
              </View>
            </View>

            <RenderStatusService status={item.status} />
          </View>
          <TouchableOpacity onPress={() => {
            navigation.navigate(
              screens.global.detailService,
              {
                serviceId: item.id
              }
            )
          }} style={styles.item__flechaContainer}>
            {getIconById("iconArrowWhite")}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export function ItemServiceManager({ item }) {
  const navigation = useNavigation();
  const { userInfo } = useAuth();



  return (
    <View style={styles.item}>
      <View style={styles.item__img}>{getIconById("minService")}</View>
      <View style={styles.item__text}>
        <View style={{ flex: 2 }}>
          <Text style={styles.item__title}>{item?.customer?.businessType} {item.category}</Text>
          <StyledText regularGray font10pt >
            {getBusinessLabel(userInfo?.businessType, item.category)}
          </StyledText>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            {item.rating != undefined && item.rating != "" &&
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <View style={{ width: 15, height: 15, marginRight: 5 }}>
                  {getIconById("iconStar")}
                </View>
                <StyledText font12pt regularGray>
                  {item.rating}
                </StyledText>
              </View>
            }
            <View style={styles.item__date}>
              <View style={[stylesGlobal.imageSmall]}>
                {getIconById("iconCalendar")}
              </View>
              <View style={styles.item__datetext}>
                <StyledText font10pt regularGray>
                  {item.formattedDate}
                </StyledText>
              </View>
            </View>
          </View>


          <RenderStatusService status={item.status} />
        </View>

        <TouchableOpacity onPress={() => {
          navigation.navigate(
            screens.global.detailService,
            {
              serviceId: item.id
            }
          )
        }} style={styles.item__flechaContainer}>
          {getIconById("iconArrowWhite")}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function ItemServiceSupervisor({ item }) {

  const { userInfo } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <View style={styles.item__img}>{getIconById("minService")}</View>
      <View style={styles.item__text}>
        <View style={{ flex: 2 }}>
          <Text style={styles.item__title}>{item?.customer?.businessType} {item.category}</Text>
          <StyledText regularGray font10pt>
            {getBusinessLabel(item?.customer?.businessType, item.category)}
          </StyledText>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            {item.rating != undefined && item.rating != "" &&
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <View style={{ width: 15, height: 15, marginRight: 5 }}>
                  {getIconById("iconStar")}
                </View>
                <StyledText font12pt regularGray>
                  {item.rating}
                </StyledText>
              </View>
            }
            <View style={styles.item__date}>
              <View style={[stylesGlobal.imageSmall]}>
                {getIconById("iconCalendar")}
              </View>
              <View style={styles.item__datetext}>
                <StyledText font10pt regularGray>
                  {item.formattedDate}
                </StyledText>
              </View>
            </View>
          </View>



        <RenderStatusService status={item.status} />
        </View>

        <TouchableOpacity onPress={() => {
          navigation.navigate(
            screens.global.detailService,
            {
              serviceId: item.id
            }
          )
        }} style={styles.item__flechaContainer}>
          {getIconById("iconArrowWhite")}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function ItemServiceEmployee({ item }) {

  const navigation = useNavigation();


  return (
    <View style={styles.item}>
      <View style={styles.item__img}>{getIconById("minService")}</View>
      <View style={styles.item__text}>
        <View style={{ flex: 2 }}>
          <Text style={styles.item__title}>{item?.customer?.businessType} {item.category}</Text>
          <StyledText regularGray font10pt>
            {getBusinessLabel(item.customer.businessType, item.category)}
          </StyledText>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            {item.rating != undefined && item.rating != "" &&
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <View style={{ width: 15, height: 15, marginRight: 5 }}>
                  {getIconById("iconStar")}
                </View>
                <StyledText font12pt regularGray>
                  {item.rating}
                </StyledText>
              </View>
            }
            <View style={styles.item__date}>
              <View style={[stylesGlobal.imageSmall]}>
                {getIconById("iconCalendar")}
              </View>
              <View style={styles.item__datetext}>
                <StyledText font10pt regularGray>
                  {item.formattedDate}
                </StyledText>
              </View>
            </View>
          </View>


          <RenderStatusService status={item.status} />
        </View>

        <TouchableOpacity onPress={() => {
          navigation.navigate(
            screens.global.detailService,
            {
              serviceId: item.id
            }
          )
        }} style={styles.item__flechaContainer}>
          {getIconById("iconArrowWhite")}
        </TouchableOpacity>
      </View>
    </View>
  );
}
