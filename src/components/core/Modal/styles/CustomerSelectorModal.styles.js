import { StyleSheet } from "react-native";
import { theme } from "../../../../utils/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 0,
        margin: 0,
        backgroundColor: "#fff"
    },
    modalContent: {
        backgroundColor: "#fff"
    },
    headerModal: {
        alignItems: "flex-end"
    },
    iconClose: {
        width: 30,
        height: 30,
        padding: 5,
        marginRight: 20,
        marginTop: 10,
        zIndex: 10
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        borderBottomColor: "#ABABAB",
        marginVertical: 25,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingLeft: 10
    },
    input: {
        flex: 1,
        marginLeft: 8,
        paddingVertical: 8,
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 16,
        paddingHorizontal: 15
    },
    option: {
        flexDirection: "row",
        marginHorizontal: 5,
        borderRadius: 10,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    item__avatar: {
        width: 40,
        height: 40,
        backgroundColor: theme.gradient.color1,
        borderRadius: 20,
        padding: 5,
        marginRight: 5
    },
    item__content: {
        flex: 2,
        paddingRight: 5
    },
    item__field: {
        flexDirection: "row",
        marginVertical: 5,
        flexWrap: "wrap"
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    confirmButtonContainer: {
        marginVertical: 15
    },
})