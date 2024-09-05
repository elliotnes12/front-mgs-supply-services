import { StyleSheet } from "react-native";
import { theme } from "../../../../utils/theme";

export const styles = new StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
  },
  body: {
    minHeight: 80,
    justifyContent: "center"
  },
  footer: {
    backgroundColor: "#fff",
    borderTopColor: "#fff",
  },
  cancel: {
    backgroundColor: "#7DA74D",
    fontFamily: theme.textStyles.regular
  },
});