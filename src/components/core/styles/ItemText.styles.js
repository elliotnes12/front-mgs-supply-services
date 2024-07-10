import { StyleSheet } from "react-native";
import { fontFamily } from "../../../utils/constantsStyle";

export const styled = (isMe) =>{
    return new StyleSheet.create({
        content:{
            flexDirection:"row",
            justifyContent:isMe? "flex-end" : "flex-start",
            marginHorizontal:10,
            marginBottom:10
        },
        message:{
            flex:1,
            backgroundColor: isMe? "#FDFFEA" : "#fff",
            maxWidth:"80%",
            borderRadius:10,
            paddingVertical:8,
            paddingHorizontal:15,
            marginBottom:10,
            fontFamily: fontFamily.fontRegular,
            shadowOpacity: 1,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            elevation: 2,
            shadowRadius: 2,
            shadowColor: "#333",
        },
        time:{
            color:"#828282",
            fontFamily: fontFamily.fontLight,
            fontSize:12,
            marginTop:5
        },
        you:{
            color:"#7DA74D"
        }
    })
}