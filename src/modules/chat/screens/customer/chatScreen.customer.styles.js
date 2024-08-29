import { StyleSheet } from "react-native";
import { Color, fontFamily } from "../../../../utils/constantsStyle";
import { theme } from "../../../../utils/theme";


export const styles = StyleSheet.create({
  chats_header: {
    height: 100,
    flex: 1
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  header__customer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scrollContainer: {
    flexGrow: 1,
  },
  searchInput: {
    height: 56,
    marginBottom: 25,
    borderRadius: 10,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#ABABAB",

  },
  searchInput__input: {
    flex: 1,
    color: "#ABABAB"
  },
  containerTitle: {
    padding: 0
  },
  usersContainer: {
    marginBottom: 25,
    height: 130,
  },
  usersList: {
    alignItems: 'center',
  },
  userItem: {
    marginRight: 5,
    width: 85,
    alignItems: 'center',
  },
  userProfile: {
    position: 'relative',
    marginBottom: 10,
    borderRadius: 37.5,
    padding: 5,

  },
  contImage: {
    backgroundColor: "#7DA74D",
    width: 60,
    height: 60,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center"

  },
  userImage: {
    width: 45,
    height: 45,
  },
  userStatus: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  statusGreen: {
    backgroundColor: '#7DA74D',
  },
  statusYellow: {
    backgroundColor: 'yellow',
  },
  statusDisconnected: {
    backgroundColor: 'grey',
  },
  userName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: '#333',
  },
  userRoleContainer: {
    height: 20,
  },
  userRole: {
    fontFamily: fontFamily.fontMedium,
    fontSize: 13,
    color: '#666',
    lineHeight: 15,
    color: "#7DA74D"
  },
  emptyRole: {
    height: 20,
  },
  chatsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chatsTitle: {
    fontFamily: fontFamily.fontSemiBold,
    fontSize: 16,
    marginBottom: 10,
    color: Color.gray1,

  },
  allChatsLink: {
    fontFamily: fontFamily.fontRegular,
    fontSize: 16,
    color: '#7DA74D',
    textDecorationLine: 'none',
  },
  recentChatsIndicator: {
    flex: 1,
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  recentChatsContainer: {
    flex: 1,
    marginBottom: 20,
    position: "relative"
  },
  chatTextContainer: {
    flex: 1,
    marginLeft: 20,
    paddingTop: 10,
    position: "relative",
    flexDirection: "column",
  },
  chatItem__name: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    height: 20,
    color: '#333',
  },
  chatItem__message: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#C4C4C4',
  },
  chatInfo: {
    position: "relative",
    flex: 1,
    height: "100%"
  },
  chatTime: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    position: "absolute",
    color: '#C4C4C4',
    right: 0,
    top: 5
  },
  totalMessageContainer: {
    backgroundColor: '#7DA74D',
    borderRadius: 15,
    width: 30,
    height: 30,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: 20
  },
  totalMessage: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#fff',
  },
  noChats: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    height: 200,
  },
  noChatsText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#333',

  },
  messagesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  messagesTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#333',
  },
  unread: {
    backgroundColor: "#E8E8E8",
    fontFamily: 'Poppins_400Regular',
    color: "#565656",
    borderRadius: 20,
    width: 65,
    textAlign: "center",
    padding: 2,
    position: "absolute",
    right: 0
  },
  allMessagesLink: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#7DA74D',
    textDecorationLine: 'none',
  },
  messagesContainer: {
    marginBottom: 20,
  },
  messageItem: {
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  messageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContent: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: '#fff',
  },
});