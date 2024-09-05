import { StyleSheet } from "react-native";
import { Color } from "../../../utils/constantsStyle";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  containerImg: {
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
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
    borderColor: Color.gray1,
    borderWidth: 1,
    alignSelf: "stretch",
    marginBottom: 20,
    borderRadius: 18,
    height: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
    width: 300,
    overflow: "hidden",
  },
  input: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    flex: 1,
    height: '80%',
    color: "#000",
    paddingHorizontal: 13,
    maxWidth: 250,
    paddingLeft: 20,
  },
  signOff: {
    fontSize: 18,
    borderRadius: 50,
    width: 170,
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
});
