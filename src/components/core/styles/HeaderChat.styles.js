import { StyleSheet } from "react-native";
import { Color } from "../../../utils/constantsStyle";
import { theme } from "../../../utils/theme";
import { PixelRatio } from "react-native";

const fontSize = PixelRatio.getFontScale() * 15; 

export const styles = StyleSheet.create({
  header: {
    height: 140,
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    paddingTop: 35,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    position: "relative",
  },
  header__content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  headerContacts__content: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontFamily: theme.textStyles.bold,
    lineHeight: 29,
    textAlign: "left",
    fontWeight: "500",
  },
  titleContact: {
    color: Color.gray1,
    fontSize: 17,
    fontFamily: theme.textStyles.bold,
    lineHeight: 29,
    textAlign: "left",
    fontWeight: "500",
  },
  subtitle: {
    color: "#fff",
    fontFamily: theme.textStyles.regular,
    fontSize: 15,
  },
  containerSearch: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ABABAB",
  },
  globalSearch: {
    width: "90%",
    position: "absolute",
    left: "2.5%",
    bottom: -70,
    display: "none",
  },
  btnSearch: {
    height: "100%",
    width: 61,
    paddingLeft: 7,
    borderRadius: 10,
    backgroundColor: "#CEDC39",
    marginLeft: "2.5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  profile__name: {
    fontFamily: theme.textStyles.semiBold,
    fontSize: fontSize,
    lineHeight: fontSize * 1.2, 
    fontWeight: "600",
    color: "#fff",
  },
  profile__content: {
    fontFamily: theme.textStyles.semiBold,
    color: "#fff",
    fontSize: PixelRatio.getFontScale() * 9,
    flex: 2,
  },
  profile__image: {
    padding: 3,
    backgroundColor: "#CEDC39",
    borderRadius: 30,
    width: 60,
    height: 60,
    padding: 5,
    marginRight: 10,
    overflow: "hidden",
  },
  totalContacts: {
    color: "#46526a",
    textAlign: "left",
    height: "100%",
    paddingTop: 5,
    flex: 2,
  },
  menuVertical: {
    width: 45,
    height: 45,
    paddingRight: 20
  },
  boxSearch: {
    height: 140,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    paddingLeft: 5
  },
  boxInputSearch: {

    padding: 5,
    backgroundColor: "#fff",
    width: "80%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row"  
  }

});
