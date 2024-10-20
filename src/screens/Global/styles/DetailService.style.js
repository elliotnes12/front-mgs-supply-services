import { StyleSheet } from "react-native";
import { theme } from "../../../utils/theme";


export const styles = StyleSheet.create({

    iconClose: {
        width: 25,
        height: 25,
        zIndex: 10,
        marginRight: 5
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#007bff",
        borderRadius: 5,
    },
    previewButtonText: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },
    btnPreviewImages: {
        width: 210,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: theme.gradient.color2,
        padding: 8,
        margin: "auto"
    }
})