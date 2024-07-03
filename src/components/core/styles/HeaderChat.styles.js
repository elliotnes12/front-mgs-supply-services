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
        paddingTop:20,
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
});