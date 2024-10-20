import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../utils/theme";
// Obtener la altura de la pantalla
const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({

    iconClose: {
        width: 25,
        height: 25,
        zIndex: 10,
        marginRight: 5
    },
    iconGallery: {
        width: 35,
        height: 35,
        zIndex: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
    },
    modalContent: {
        flex: 1,
        justifyContent: "space-around",
    },
    modalImages: {
        width: "100%",
        backgroundColor: "#fff",
        flex: 1,
        flexWrap: "wrap"
    },
    modalBottom: {
        height: 100,
        flexDirection: "row",
        backgroundColor: "#F9FCDE",
        paddingVertical: 15,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    modalBottomItem: {
        width: 80,
        justifyContent: "center",
        alignItems: "center"
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