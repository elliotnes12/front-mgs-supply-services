import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
 
  container:{
    flex: 1,
    backgroundColor: "#FFFFFF",
    width:"100%"
  },
  content:{
    flex: 1,
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img:{
    width: 300,
    resizeMode: "contain",
    marginVertical: 15,
  },
  title: {
    color: "#000",
    marginVertical: 15,
    opacity: 0.6,
  },
  register: {
    color: "#7DA74D",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 30,
  },
  info: {
    color: "#000",
    marginVertical: 15,
    opacity: 0.6,
    textAlign: "center",
  },
});