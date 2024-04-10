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
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    fontFamily: "Rubik",
    fontWeight: "500",
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  circleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Esto hace que sea un círculo perfecto
    backgroundColor: "#7DA74D",
    position: "absolute",
    top: 50,
    left: 0,
  },
});