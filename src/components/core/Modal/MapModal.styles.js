import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        padding: 0,
        margin: 0,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchContainer: {
        position: "absolute",
        top: 20,
        left: 10,
        right: 10,
        zIndex: 1,
    },
    searchBar: {
        height: 50,
        borderRadius: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    searchButton: {
        width: 46,
        height: 46,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CEDC39",
        borderWidth: 1.5,
        borderColor: "#fff",
        zIndex: 10,
    },
    searchIcon: {
        width: 35,
        height: 35,
        padding: 5,
    },
    animatedSearch: {
        height: 50,
        backgroundColor: "#CEDC39",
        borderRadius: 60,
        marginLeft: -50,
        justifyContent: "center",
        paddingLeft: 60,
    },
    searchInput: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        height: "100%",
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
        position: "absolute",
        top: 40,
        right: 20,
        width: 20,
        height: 20,
        zIndex: 10
    },
});
