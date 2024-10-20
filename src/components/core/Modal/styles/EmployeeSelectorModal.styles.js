import { StyleSheet } from "react-native";
import { theme } from "../../../../utils/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        borderBottomColor: "#ABABAB",
        marginVertical: 25,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
    },
    toggleSearchType: {
        marginLeft: 10,
        color: 'blue',
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
        paddingLeft: 5,
        flex: 2,
    },
    selectedItem: {
        backgroundColor: '#F9FCDE',
        borderWidth: 1,
        borderColor: theme.gradient.color1
    },
    confirmButtonContainer: {
        marginVertical: 15
    },
    disabledItem: {
        backgroundColor: '#F9FCDE',
        borderWidth: 1,
        borderColor: theme.gradient.color1
    },

})