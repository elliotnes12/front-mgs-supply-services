import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    flex: 1,
  },
  minImg: {
    width: 100,
    height: 100,
  },
  containerText: {
    flexDirection: "column",
    alignSelf: "center",
    marginLeft: 20,
  },
  containerStart: {
    flexDirection: "row",
  },
  ContenidoMontly: {
    flexDirection: "row",
    marginTop: 10,
  },
  Containertree: {
    marginTop: 0,
    flexGrow: 1,
    backgroundColor: "#F9F9F9",
  },
  Contenidoranking: {
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
  },
  ranking: {
    height: "100%",
    width: "100%",
  },
  startranking: {
    marginTop: 5,
    width: 10,
    height: 10,
  },
  item__total: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  Num__Total: {
    color: "#7DA74D",
    fontFamily: theme.textStyles.bold,
  },
});
