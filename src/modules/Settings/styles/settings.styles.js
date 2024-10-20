import { StyleSheet } from "react-native";
import { Color } from "../../../utils/constantsStyle";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: theme.colors.gray6,
  },
  container: {
    justifyContent: "flex-start",
    flex: 1,
  },
  containerFields: {
    paddingHorizontal: 30,
  },
  bgContainerAvatar: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 15
  },
  containerImg: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: theme.gradient.color1,
    borderRadius: 50
  },
  imgProfile: {
    width: 80,
    height: 80,
    backgroundColor: theme.gradient.color1,
    padding: 8,
    borderRadius: 55,
    overflow: "hidden",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  field: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    marginBottom: 20,
    borderRadius: 10,
    height: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
    width: 340,
    overflow: "hidden",
  },
  iconField: {
    width: 25,
    height: 25,
    marginHorizontal: 10
  },
  input: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    flex: 1,
    height: '80%',
    color: "#000",
    maxWidth: 250,
    paddingLeft: 10,
  },
  signOff: {
    fontSize: 18,
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  signOffText: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },
  errorlogin: {
    color: '#dc3545',
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 18,
    borderBottomColor: "#fff"
  }
});
