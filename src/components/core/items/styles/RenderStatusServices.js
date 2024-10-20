import { StyleSheet } from "react-native";
import { Color, FontSize } from "../../../../utils/constantsStyle";


export const styles = StyleSheet.create({
    estatus: {
        width: 110,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 10,
        height: 25,
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    aprobado: {
        backgroundColor: "#ECB403",
    },
    canceled: {
        backgroundColor: "#FF8585",
    },
    success: {
        backgroundColor: "#7DA74D",
    },
})