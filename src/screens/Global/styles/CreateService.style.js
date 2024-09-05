import { StyleSheet } from "react-native";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
  header: {
    height: 155,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  categories: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    position: "relative",
  },
  avatarAssingEmployee: {
    width: 35,
    height: 35,
    marginRight: 10,
    backgroundColor: "#CEDC39",
    padding: 6,
    borderRadius: 20,
  },
  iconClose: {
    width: 20,
    height: 20,
    zIndex: 10,
    marginRight: 5
  },
  street__googleMaps: {
    fontFamily: theme.textStyles.regular,
    color: theme.colors.green,
    paddingRight: 10,
    textDecorationLine: "underline",
  },
  bussiness: {
    marginTop: 10,
    marginBottom: 15,
  },
  bussiness__name: {
    color: "#BDBDBD",
    fontFamily: theme.textStyles.regular,
    padding: 10,
    marginBottom: 10,
    fontSize: 15,
    flexGrow: 1,
    backgroundColor: theme.colors.lightGray,
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    borderColor: "#828282",
    borderWidth: 1,
    padding: 10,
  },
  submit: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    position: "relative",
    width: 240,
    height: 50,
    borderRadius: 25,
    marginBottom: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button__text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#fff",
  },
});
