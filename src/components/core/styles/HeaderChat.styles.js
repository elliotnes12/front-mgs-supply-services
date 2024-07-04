import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 100,
        display: "flex",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 20,
        paddingTop: 20,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        position: "relative",
        zIndex:24
    },
    header__content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop:10
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Poppins_700Bold",
        
    },
    subtitle: {
        color: "#fff",
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        marginTop:-10

    },
    containerSearch: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        height: 52,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#ABABAB"
    },
    globalSearch: {
        width: "90%",
        position: "absolute",
        left: "2.5%",
        bottom: -70,
        display:"none"
    },
    btnSearch:{
        height:"100%",
        width:61,
        paddingLeft:7,
        borderRadius:10,
        backgroundColor:"#CEDC39",
        marginLeft:"2.5%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    }
});
