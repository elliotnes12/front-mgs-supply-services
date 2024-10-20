import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalImage: {
        width: width,
        height: 500,
        margin: "auto",
    },
    closeButton: {
        position: "absolute",
        bottom: 50,
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "#333",
        fontWeight: "bold",
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
    iconClose: {
        width: 30,
        height: 30,
        zIndex: 10
    }
});
