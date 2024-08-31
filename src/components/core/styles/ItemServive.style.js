import { StyleSheet } from "react-native";
import { Border, Color, FontSize } from "../../../utils/constantsStyle";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
    position: "relative",
    marginBottom: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "#333",
    borderRadius: Border.br_3xs,
    height: 120,
    backgroundColor: Color.blanco,
    paddingTop: 10,
    paddingLeft: 5,
  },
  item__img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  item__text: {
    top: -15,
    paddingTop: 20,
    flex: 1,
  },
  item__title: {
    letterSpacing: 0.3,
    lineHeight: 18,
    fontSize: FontSize.headline16_size,
    color: theme.colors.secondaryColor,
    fontFamily: theme.textStyles.semiBold,
    fontWeight: "500",
  },
  item_subtitle: {
    color: "#0F0F0F",
    fontFamily: theme.textStyles.light,
    fontSize: 12,
  },
  item__raiting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 40,
    marginTop: 5,
    justifyContent: "space-between",
  },
  raiting: {
    width: 12.5,
    height: 12.5,
  },
  item__date: {
    position: "absolute",
    right: 0,
    bottom: -15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 130,
  },
  item__datetext: {
    color: Color.gray1,
    fontSize: FontSize.textXsReguler_size,
    marginLeft: 5,
    height: 17,
  },

  item__flechaContainer: {
    width: 20,
    height: 20,
    marginRight: 5,
    position: "absolute",
    right: 0,
    top: "50%",
  },
  imageFullSize: {
    width: 20,
    height: 20,
  },
  item__ratingContainer: {
    width: 24,
    height: 24,
    marginRight: 20,
    position: "relative",
    left: 15,
    bottom: "15%",
  },
});
