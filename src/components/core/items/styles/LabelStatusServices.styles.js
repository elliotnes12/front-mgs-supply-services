import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    estatus: {
        width: "100%",
        marginVertical: 5,
        height: 30,
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