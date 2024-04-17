import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({

  container: {
    width: '100%',
    flex: 0,
  },
  gradient: {
    width: '100%',
    flex: 0,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  img: {
    width: 300,
    resizeMode: "contain",
    marginBottom: 5,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: "#7DA74D",
    fontSize: 33,
    fontFamily: "Rubik",
  },
  subtitle: {
    color: "#7DA74D",
    fontSize: 16,
    fontFamily: "Rubik",
    marginBottom: 35,
    padding: 15,
    textAlign: "center"
  },
  signUp: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#CEDC39",
    borderRadius: 50,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    marginBottom: 20
  },
  signUpText: {
    color: "#7DA74D",
    fontWeight: '400',
  },
  info: {
    color: "#000",
    marginVertical: 15,
    opacity: 0.6,
    textAlign: "center",
  },
});