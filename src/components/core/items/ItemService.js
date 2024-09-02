import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { stylesGlobal } from "../../../modules/styles/global.style";
import StyledText from "../../../utils/globalstyle";
import { getIconById } from "../../../utils/util";
import { styles } from "../styles/ItemServive.style";
import { RenderStatusService } from "./RenderStatusService";

export function ItemService({ item }) {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.item__img}>{getIconById("minService")}</View>
        <View style={styles.item__text}>
          <StyledText font16pt bold>
            {item.title}
          </StyledText>
          <StyledText font12pt regularGray>
            {item.subTitle}
          </StyledText>
          <View style={styles.item__raiting}>
            <View style={styles.raiting}>{getIconById("iconRaiting")}</View>

            <StyledText font10pt regularGray>
              {item.raiting}
            </StyledText>
          </View>

          <View style={styles.item__date}>
            <View style={[stylesGlobal.imageSmall]}>
              {getIconById("iconCalendar")}
            </View>
            <StyledText font8pt regularGray>
              {item.date}
            </StyledText>
          </View>

          <TouchableOpacity style={styles.item__flechaContainer}>
            {getIconById("iconArrowWhite")}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export function ItemServiceManager({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.item__img}>{getIconById("minService")}</View>
      <View style={styles.item__text}>
        <StyledText font16pt bold>
          {item.title}
        </StyledText>
        <StyledText font12pt regularGray>
          {item.subTitle}
        </StyledText>

        <View style={styles.item__date}>
          <View style={[stylesGlobal.imageSmall]}>
            {getIconById("iconCalendar")}
          </View>
          <StyledText font10pt regularGray>
            {item.date}
          </StyledText>
        </View>

        <RenderStatusService status={item.status} />

        <TouchableOpacity style={styles.item__flechaContainer}>
          {getIconById("iconArrowWhite")}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function ItemServiceSupervisor({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.item__img}>{getIconById("minService")}</View>
      <View style={styles.item__text}>
        <Text style={styles.item__title}>{item.title}</Text>
        <Text style={styles.item_subtitle}>{item.subTitle}</Text>

        <View style={styles.item__date}>
          <View style={[stylesGlobal.imageSmall]}>
            {getIconById("iconCalendar")}
          </View>
          <View style={styles.item__datetext}>
            <StyledText font10pt regularGray>
              {item.date}
            </StyledText>
          </View>
        </View>

        <RenderStatusService status={item.status} />

        <TouchableOpacity style={styles.item__flechaContainer}>
          {getIconById("iconArrowWhite")}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function ItemServiceEmployee({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.item__img}>{getIconById("minService")}</View>
      <View style={styles.item__text}>
        <StyledText font14pt bold>
          {item.title}
        </StyledText>
        <StyledText font12pt regularGray>
          {item.subTitle}
        </StyledText>

        <View style={styles.item__date}>
          <View style={[stylesGlobal.imageSmall]}>
            {getIconById("iconCalendar")}
          </View>
          <StyledText font8pt regularGray style={styles.item__datetext}>
            {item.date}
          </StyledText>
        </View>

        <RenderStatusService status={item.status} />

        <TouchableOpacity style={styles.item__flechaContainer}>
          {getIconById("iconArrowWhite")}
        </TouchableOpacity>
      </View>
    </View>
  );
}
