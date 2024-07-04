import { StyleSheet } from "react-native";


export const stylesGlobal = StyleSheet.create({
   imageMin:{
    width:25,
    height:25,
    marginRight:10
   },
   imageMd:{
      width:40,
      height:40,
   },
   imageLg:{
      width:60,
      height:60,
   },
   imageMin__img:{
    width:"100%",
    height:"100%"
   },
   itemVertical:{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      flex:1
   },
   itemHorizontal:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
 }
})