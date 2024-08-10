import { StyleSheet } from "react-native";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: 270,
    height: 160,
    position: "absolute",
    top: 0
  },

  field: {
    marginBottom: 20,
    width: 320,
  },
  inputContainer: {
    borderColor: "#ffffff",
    borderWidth: 1.2,
    borderRadius: 8,
    height: 45,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    flex: 1,
    height: '100%',
    color: "#000",
  },
  inputError: {
    borderColor: '#dc3545',
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    padding: 15,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 220
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: theme.textStyles.regular,
    letterSpacing: 0.25,
    color: 'white',
  },
  errorlogin: {
    color: '#dc3545',
  },
  signUp: {
    marginTop: 20,
  },
  signUpText: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  loginNowContainer: {
    marginTop: 15,
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  loginNowText: {
    color: "#fff"
  },
  loginNowLink: {
    color: "#fff",
    textDecorationLine: "underline",
  }
});
