import { StyleSheet } from "react-native";
import { Border, Color, FontSize, fontFamily } from "../../../../utils/constantsStyle";

export const styles = StyleSheet.create({
    item: {
        paddingTop: 20,
        marginBottom: 40
    },
    item__title: {
        fontSize: 16,
        color: Color.secondaryColor,
        lineHeight: 19,
        letterSpacing: 0.3,
        textAlign: "left",
        fontWeight: "500",
        fontFamily: fontFamily.fontSemiBold,
        marginTop: 15,
    },
    imgProfile: {
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 1
    },
    item__supervisor: {
        fontFamily: fontFamily.fontSemiBold,
        letterSpacing: 0.4,
        fontSize: 16,
        color: Color.secondaryColor,
        textAlign: "left",
        fontWeight: "600",
        flex: 1,
        marginLeft: 10
    },
    item__textSupervisor: {
        letterSpacing: 0.3,
        fontSize: FontSize.paragraphRegularSmall_size,
        fontFamily: fontFamily.fontRegular,
        fontWeight: "500",
        textAlign: "center",
        flex: 1,
        color: Color.blanco,
    },
    item__etqSupervisor: {
        height: 26,
        width: 106,
        borderRadius: 5,
        fontSize: 12,
        backgroundColor: Color.bottomGradiente,
    },
    item__titleCategory: {
        fontFamily: fontFamily.fontLight,
        fontWeight: "300",
        width: 192,
        fontSize: FontSize.paragraphRegularSmall_size,
        textAlign: "left",
        color: Color.fontMid,
        marginTop: 5,
        marginLeft: 5
    },
    item__assigned: {
        fontFamily: fontFamily.fontRegular,
        lineHeight: 24,
        fontSize: FontSize.paragraphRegularSmall_size,
        textAlign: "left",
        color: Color.fontMid,
        marginTop: 15
    },
    item__employee_name: {
        color: "#0F0F0F",
        fontFamily: fontFamily.fontLight,
        paddingLeft: 10,
        flex: 1,
        flexWrap: 'wrap', // Esto permitirá que el texto se envuelva
        paddingRight: 10
    },
    btnEdit:{
        backgroundColor:"#FFBD12",
        width:144,
        height:36,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:31,
        marginTop:20,
        marginRight:25
    },
    btnCancel:{
        backgroundColor:"#FF8585",
        width:144,
        height:36,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:31,
        marginTop:20
    }
});