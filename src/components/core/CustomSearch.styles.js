import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    searchContainer: {
        position: "absolute",
        top: 20,
        zIndex: 10,
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
        justifyContent: "center",
    },
    searchInput: {
        fontSize: 18,
        fontWeight: "bold",
        flex: 1,
        color: "#fff",
        height: "100%",
    },
});
