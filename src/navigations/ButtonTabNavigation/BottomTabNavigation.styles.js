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
    headerGoback:{
        backgroundColor:"#F3F3F3"
    },
    tabBarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        marginLeft: "5%",
        marginRight: "5%",
        paddingLeft: 18,
        paddingRight: 18,
        height: 65,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "rgba(210, 210, 210, 0.8)",
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    tabBarItemHome: {
        width: 130,
        maxWidth: 130,
        height: "100%",
        marginRight: 2,
        height:"100%"
        
    },
    tabBarItemOptions: {
        width: 45,
        height: 45,
        maxWidth: 45,
        overflow: "hidden",
        borderRadius: 25,
        marginRight: 5,
        padding: 8,
        marginTop:10
    },
    img: {
        width: "100%",
        height: "100%",
    },
    itemHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        paddingRight: 25,
        borderRadius: 25,
        overflow:"hidden"
    }
});
