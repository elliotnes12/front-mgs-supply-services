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
     contente__item:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:200,
      paddingTop:'200%',
      position:'absolute'
     },
     contente__inbox:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:200,
      paddingTop:'200%',
      position:'absolute'
      
     },
     inbox:{
      width:100,
      height:100,
      display:'flex',
      flexDirection:'row'

     }



})