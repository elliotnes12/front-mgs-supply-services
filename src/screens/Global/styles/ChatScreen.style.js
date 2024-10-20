import { StyleSheet } from "react-native";
import { Color, FontSize } from "../../../utils/constantsStyle";


export const styles = StyleSheet.create({

   contente__items: {
      display:'flex',
      flexDirection:'row',
      paddingLeft:10,
      paddingTop:'100%',
      padding:10
      
     },
   contente__item: {
      display:'flex',
      flexDirection:'row',
      paddingLeft:10,
      paddingTop:'50%',
      
     },
     inbox:{
      width:290,
      height:45,
      borderRadius:15,
     },
     mensaje:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        paddingHorizontal:20,
        borderRadius:20
     },
     containerMessages:{
      display: "flex", 
      flexDirection: "row", 
      height: 50, 
      position: "absolute", 
      bottom: 20, 
      left: "5%", 
      width: "90%", 
    },
     mensaje__input:{
      flex:1,
      height:"100%"
     },
     contente__icons:{
      display:"flex",
      alignItems:"center",
      flexDirection:"row",
      marginLeft:15,
     },
     camera:{
      marginLeft:10,
     },
     clip:{
      marginRight:10,
     },
     contente__microfono:{
      paddingLeft:15,
      paddingTop:190,
     },
     contentMessageOne:{
        display:"flex",
        width:"100%",
        justifyContent:"flex-end",
        flexDirection:"row",
        alignContent:"center",
        paddingRight:20,
        marginBottom:10,
     },
     contentMessageTwo:{
        display:"flex",
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignContent:"center",
        paddingLeft:10,
        marginBottom:10
     },
     contentMessageOne__message:{
        backgroundColor:'#7DA74D',
        color:"#fff",
        width:150,
        minHeight:35,
        fontSize:15,
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        padding:10
     },
     contentMessageTwo__message:{
      backgroundColor:"#F5FFEF",
      width:150,
      minHeight:40,
      fontSize:15,
      borderRadius:10,
      alignItems:"center",
      display:"flex",
      padding:10
   },
   btnCreateService:{
      width: 166,
      lineHeight: 24,
      borderRadius: 20,
      padding:7,
      marginTop: 5,
      alignItems: "center"
   },
   menuChat: {
      position: 'absolute',
      width: 140,
      top: 110,
      zIndex: 8,
      right: 30,
      borderWidth: 0.4,
      borderColor: Color.gray1,
      backgroundColor: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      shadowOpacity: 1,
      shadowRadius: 10,
      shadowColor: Color.gray1,
    },
    menuChat__item: {
       borderBottomWidth: 1,
      borderBottomColor: Color.gray1
    },
    menuChat__option: {
       padding: 10,
      backgroundColor: "#fff",
      marginBottom: 5,
      paddingLeft:15
    },
   menu__questions: {
      position: "absolute",
      bottom: 60,
      right: 20,
      backgroundColor: "#fff",
      padding: 20,
      height: 380,
      borderRadius: 5,
      paddingVertical: 25
   },
   btn_questions: {
      width: "100%",
      height: "100%",
      padding: 8,
      borderRadius: 22.5,
      justifyContent: "center",
      alignItems: "center",
   }
})