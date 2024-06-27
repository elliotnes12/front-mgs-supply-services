import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      paddingHorizontal: 25,
      paddingBottom: 10,
      marginTop:15
    },
    header__customer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    scrollContainer: {
      flexGrow: 1,
    },
    searchInput:{
      marginBottom:25,
      borderRadius:40,
      paddingLeft:15,
      borderWidth:1,
      borderColor:"#828282"
    },
    searchInput__input:{
      height:50
    },
    transparentBackground: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
    },
  
    title: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 24,
      color: '#333',
      width: 100,
      lineHeight: 27
    },
    containerTitle: {
      marginBottom: 20,
      width: 100
    },
    usersContainer: {
      marginBottom: 25,
      height:130
    },
    usersList: {
      alignItems: 'center',
    },
    userItem: {
      marginRight: 20,
      alignItems: 'center',
    },
    userProfile: {
      position: 'relative',
      marginBottom: 10,
    },
    userImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
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
    statusRed: {
      backgroundColor: 'red',
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
      fontFamily: 'Poppins_400Regular',
      fontSize: 13,
      color: '#666',
      lineHeight: 15
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
      fontFamily: 'Poppins_700Bold',
      fontSize: 20,
      color: '#333',
  
    },
    allChatsLink: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 16,
      color: '#7DA74D',
      textDecorationLine: 'none',
    },
    recentChatsContainer: {
      marginBottom: 20,
    },
    chatItem: {
      backgroundColor: "#fff",
      height: 73,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    chatImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center"
    },
    imgMessage: {
      width: 25,
      height: 25
    },
    chatTextContainer: {
      flex: 1,
      marginLeft: 10,
      position: "relative"
    },
    chatName: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 16,
      color: '#333',
    },
    chatMessage: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 14,
      color: '#C4C4C4',
    },
    chatInfo: {
      alignItems: 'flex-end',
    },
    chatTime: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 12,
      color: '#C4C4C4',
    },
    unreadBadge: {
      backgroundColor: '#CEDC39',
      borderRadius: 15,
      width: 30,
      height: 30,
      marginTop: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    unreadBadgeText: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 12,
      color: '#000',
    },
    noChats: {
      alignItems: 'center',
    },
    noChatsText: {
      fontFamily: 'Poppins_700Bold',
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
      // Sombras en la parte inferior de los ítems de mensaje
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5, // Para Android
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