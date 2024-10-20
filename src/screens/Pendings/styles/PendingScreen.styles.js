import { StyleSheet } from "react-native";
import { Border, Color, FontSize } from "../../../utils/constantsStyle";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
  gradient: {
    height: 145,
    paddingBottom: 10,
  },
  safeArea: {
    display: "flex",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
  },
  title: {
    marginHorizontal: 5,
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
  },
  container_item: {
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
    minHeight: 120,
    backgroundColor: Color.blanco,
    paddingTop: 10,
    paddingLeft: 10,
  },
  office: {
    fontFamily: "Poppins_700Bold",
    fontSize: FontSize.headline16_size,
    letterSpacing: 0.3,
    lineHeight: 17,
    color: Color.secondaryColor,
    textAlign: "left",
    fontWeight: "500",
  },
  notice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,

  },
  notice_description: {
    fontWeight: "300",
    lineHeight: 24,
    fontSize: FontSize.paragraphRegularSmall_size,
    textAlign: "left",
    color: Color.fontMid,
  },
  notice__img: {
    width: "100%",
    height: "100%",
  },
  cleaning: {
    fontFamily: "Poppins_400Regular",
    color: "#0F0F0F",
  },
  assigned: {
    fontFamily: "Poppins_400Regular",
    fontWeight: "300",
    lineHeight: 24,
    fontSize: FontSize.paragraphRegularSmall_size,
    textAlign: "left",
    color: "#0f0f0f",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  item__img: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
    backgroundColor: theme.gradient.color1,
    padding: 5
  },
  container__item: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  scrollViewContent: {
    marginTop: 20,
    paddingBottom: 20,
  },
  personalName: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#0F0F0F",
  },
  options: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
    marginLeft: 5,
  },
  options__item: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 100,
  },
});
