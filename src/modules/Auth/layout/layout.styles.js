import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center"
  },
  content: {
    alignItems: "center"
  },
  logo: {
    width: 270,
    height: 160,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
