import { StyleSheet } from "react-native";
import { Color, FontSize } from "../../../utils/constantsStyle";

export const styles = StyleSheet.create({

    item:{
        backgroundColor: "#fff",
        height: 73,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        marginBottom:5
    },
    iconCreateGroup:{
        overflow:'hidden',
        borderRadius:22,
        padding:10,
        height:44,
        width:44
    },
    titleGroup:{
        color: Color.negro,
        height: 22,
        fontFamily: "Poppins_600SemiBold",
        fontWeight: "500",
        textAlign: "left",
        lineHeight: 20,
        marginLeft:5
    },
    titleContacts:{
        color: Color.colorSecundario,
        height: 22,
        fontFamily: "Poppins_600SemiBold",
        fontWeight: "500",
        textAlign: "left",
        lineHeight: 20,
        fontSize: 12,
        marginTop:15,
        marginBottom:15
    },
    chatItem__snImg:{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#7DA74D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      chatTextContainer:{
        flex:1,
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        paddingLeft:20
      },
      chatItem__name:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        height:20,
        color: '#333',
      },
      chatItem__type:{
        color:"#7DA74D"
      }

})