import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

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
        backgroundColor: "#F9FCDE",
        width: "100%",
        height: 100,
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
        marginTop: 5,
        fontSize: 13,
        fontFamily: theme.textStyles.regular
    },
    border: { 
        position: "absolute",
        bottom:-25,
        left: -20
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
    centralButtonContainer: {
        position: 'absolute',
        bottom: 40,
        zIndex: 10, // Ensures it's on top
        alignItems: 'center',
        justifyContent: 'center',
    },
    centralButton: {
        width: "auto",
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10, // Prioritize touch events
    },
    registerOrder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
