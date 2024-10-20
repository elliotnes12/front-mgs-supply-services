import { StyleSheet } from "react-native";
import { theme } from "../../../../utils/theme";

export const styles = StyleSheet.create({
    modalContainer: {
        padding: 0,
        margin: 0,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputContainer: {
        height: 50,
        borderRadius: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: "flex-start",
    },
    imageContainer: {
        width: 47,
        height: 47,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.gradient.color2,
        position: "absolute",
        left: 1,
        borderWidth: 1.5,
        borderColor: theme.gradient.color2,
        zIndex: 10
    },
    input: {
        height: '100%',
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 60
    },
    mapView: {
        flexGrow: 1,
    },
    addressContainer: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 5,
        borderRadius: 5,
    },
    selectAddressButton: {
        backgroundColor: "#CEDC39",
        borderRadius: 10,
        flex: 1,
        padding: 10,
        height: "100%"
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    closeButton: {
        marginRight: 10,
        width: 30,
        height: 30,
        zIndex: 10
    },
    suggestionsContainer: {
        backgroundColor: "#fff",
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        maxHeight: 150,  // Limitar el alto de la lista de sugerencias
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});
