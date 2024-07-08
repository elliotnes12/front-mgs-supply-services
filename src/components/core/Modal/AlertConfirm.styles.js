import { StyleSheet } from "react-native";
import { Color } from "../../../utils/constantsStyle";

export const styles = new StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
  },
  titleText: {
    color: Color.gray1,
    fontWeight: "bold",
    fontSize: 16,
  },
  body: {
    backgroundColor: "#fff",
  },
  messageText: {
    color: "#fff",
    opacity: 0.6,
  },
  footer: {
    backgroundColor: "#fff",
    borderTopColor: "#fff",
  },
  cancel: {
    backgroundColor: "#7DA74D",
  
  },
});