import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chatItem: {
      backgroundColor: "#fff",
      height: 73,
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
      marginBottom:5
    },
    chatItem__img: {
      width: 30,
      height: 30,
      overflow:"hidden",
      borderRadius:30,
      backgroundColor:"purple"
    },
    imageMin__img:{
      borderRadius:"50%"
    },
    chatTextContainer: {
      flex: 1,
      marginLeft: 20,
      paddingTop:15,
      position: "relative",
      flexDirection:"column",
      borderBottomWidth:0.5,
      borderBottomColor:"#8E8E93"
    },
    chatItem__name: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 16,
      height:20,
      color: '#333',
    },
    chatItem__message: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 12,
      color: '#C4C4C4',
      flex:1,
    },
    chatContainerTime: {
      position:"relative",
      height:"100%",
      width:50,
      
      borderBottomWidth:0.5,
      borderBottomColor:"#8E8E93"
    },
    chatTime: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 12,
      position:"absolute",
      color: '#C4C4C4',
      right:15,
      top:5
    },
    totalMessageContainer: {
      backgroundColor: '#7DA74D',
      borderRadius: 15,
      width: 30,
      height: 30,
      marginTop: 5,
      justifyContent: "center",
      alignItems: "center",
      position:"absolute",
      right:10,
      top:20, 
    },
    totalMessage: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 12,
      color: '#fff',
    },
    noChats: {
      flex:1,
      alignItems: 'center',
      justifyContent:"center",
      height:200,
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