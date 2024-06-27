import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

     header:{
         height:155,
         borderBottomLeftRadius:25,
         borderBottomRightRadius:25,
         display:"flex",
         width:"100%",
         alignItems:"flex-start",
         justifyContent:"center",
         paddingLeft: 20,
     },
     header__content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
     },
     profile__img:{
          width:70,
          height:70,
          borderRadius:35,
          overflow:"hidden",
          borderWidth:5,
          borderColor:"#fff"
     },
     profile__name:{
        color:"#fff",
        fontSize:19,
        marginLeft:15
     },
     profile__content:{
      color:"#fff",
      fontSize:12,
      marginLeft:15
     },
     contente__items:{
      backgroundColor:'red',
      display:'flex',
      flexDirection:'row',
      paddingLeft:10,
      paddingTop:'100%',
      padding:10
      
     },
     contente__item:{
      backgroundColor:'red',
      display:'flex',
      flexDirection:'row',
      paddingLeft:10,
      paddingTop:'50%',
      
     },
     inbox:{
      width:290,
      height:40,
      borderRadius:15,
     },
     mensaje:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        paddingRight:15,
        borderRadius:20
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
    


})