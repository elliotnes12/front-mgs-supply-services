import { StyleSheet } from "react-native";
import { Color, fontFamily } from "../../../utils/constantsStyle";
import Constants from "expo-constants";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 5,
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: Constants.statusBarHeight + 25,
  },
  profile: {
    flexDirection: "row",
  },
  alerts: {
    height: 35,
    width: 35,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  alerts__count: {
    width: 25,
    height: 25,
    top: -8,
    left: -10,
    zIndex: 1,
    position: "absolute",
    backgroundColor: "#FF8585",
    borderRadius: 12.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alert__text: {
    color: "#fff",
  },
  goProfile: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#fff",
  },
  containerProfile: {
    height: 65,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#CEDC39",
    borderRadius: 37.5,
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: "center",
    minWidth: 100,
  },
  banner: {
    height: 150,
    marginTop: 15,
    width: "100%",
    position: "relative",
  },
  bgbanner: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: 10,
  },
  promos__title: {
    width: 201,
    lineHeight: 24,
    marginLeft: 20,
    top: 10,
  },
  promos__label: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.76)",
    marginLeft: 20,
    top: 10,
  },
  bg_person: {
    height: 150,
    width: 120,
    position: "absolute",
    right: 10,
    bottom: 0,
  },
  tabViewContainer: {
    flexGrow: 1,
    marginTop: 15,
  },
  imageProfile: {
    width: "100%",
    height: "100%",
  },
  imageAlerts: {
    width: "100%",
    height: "100%",
  },
  promoText: {
    fontFamily: fontFamily.fontBold,
    color: Color.blanco,
    fontSize: 20,
    position: "absolute",
    top: 100,
    left: 30,
  },
  promoLastService: {
    height: 30,
    width: 60,
    borderRadius: 5,
    backgroundColor: Color.blanco,
    fontSize: 18,
    color: "#7EA74C",
    position: "absolute",
    top: 20,
    left: 30,
    padding: 5,
  },
});
