import { StyleSheet } from "react-native";
import { Color } from "../../../utils/constantsStyle";

export const styles = StyleSheet.create({
  chatItem: {
    backgroundColor: "#fff",
    height: 73,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    marginBottom: 5,
  },
  chatItem__img: {
    width: 30,
    height: 30,
    overflow: "hidden",
    borderRadius: 30,
  },
  chatItem__snImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#7DA74D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageMin__img: {
    borderRadius: "50%",
  },
  chatTextContainer: {
    flex: 1,
    marginLeft: 20,
    paddingTop: 15,
    position: "relative",
    flexDirection: "column",
  },
  chatItem__message: {
    flex: 1,
  },
  chatContainerTime: {
    position: "relative",
    height: "100%",
    width: 50,
  },
  chatContent: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#8E8E93",
    paddingBottom: 15
  },
  chatTime: {
    position: "absolute",
    right: 15,
    top: 5,
  },
  totalMessageContainer: {
    backgroundColor: "#CEDC39",
    borderRadius: 15,
    width: 30,
    height: 30,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 20,
  },
  totalMessage: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: Color.gray1,
  },
  unread: {
    backgroundColor: "#E8E8E8",
    fontFamily: "Poppins_400Regular",
    color: "#565656",
    borderRadius: 20,
    width: 65,
    textAlign: "center",
    padding: 2,
    position: "absolute",
    right: 0,
  },
  allMessagesLink: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#7DA74D",
    textDecorationLine: "none",
  },
  messagesContainer: {
    marginBottom: 20,
  },
  messageItem: {
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  messageCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#CEDC39",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

