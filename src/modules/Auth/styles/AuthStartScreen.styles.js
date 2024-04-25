import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    position: "relative",
  },
  img: {
    width: 300,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Rubik",
    fontWeight: "400",
    color: "#7DA74D",
    fontSize: 33,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontFamily: "Rubik",
    color: "#000",
    opacity: 0.6,
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#7DA74D",
    width:300,
    padding: 7,
    borderRadius: 50,
    marginTop:10
  },
  btnText: {
    fontFamily: "Rubik",
    fontWeight: "500",
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  }
});