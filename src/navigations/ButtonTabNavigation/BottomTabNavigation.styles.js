import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    goBack: {
        borderRadius: 50,
        height: 50,
        width: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 2,
        marginLeft: 20,
    },
    headerGoback: {
        backgroundColor: "#fff"
    },
    tabBarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 100,
        width: "100%",
        backgroundColor: "#F9FCDE",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        borderTopWidth: 0, 
        position: 'relative', 
        zIndex: 2,
    },
    tabBarItemOptions: {
        flex: 1, 
        height: "100%",
        position: "relative",
        padding: 8,
        alignItems: 'center',
        backgroundColor: "transparent",
        justifyContent: 'center',
    },
    img: {
        width: 28,
        height: 28,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabText: {
        color: "rgba(34, 33, 40, 1)",
        marginTop: 5,
        fontSize: 13,
        fontFamily: "Poppins_400Regular"
    },
    border: { 
        position: "absolute",
        bottom:-25,
        left:-50
    },
    registerOrder: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        left: -32.5
    },

});
