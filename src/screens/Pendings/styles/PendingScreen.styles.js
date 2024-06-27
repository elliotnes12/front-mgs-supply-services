import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container_item: {
        paddingHorizontal: 24,
        paddingVertical: 10,
         marginBottom: 7,
         position:"relative",
         display:"flex",
         justifyContent:"space-between",
         flexDirection:"row",
         width:"100%",
    },
    gradient: {
        height: 145,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        paddingBottom:10,
    },
    safeArea: {
        display: 'flex',
        height:"100%",
        flexDirection: 'row',
        alignItems:"center",
        marginHorizontal: 30,
    },
    title: {
        marginHorizontal: 5,
        fontSize: 28,
        fontFamily: 'Poppins_700Bold',
        color: "#FFFFFF",
    },

    office: {
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
        color: "#080C2F"
    },
    notice: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        fontSize:15
    },
    notice__img: {
        width:"100%",
        height:"100%"
    },
    cleaning: {
        fontFamily: 'Poppins_400Regular',
        color: "#0F0F0F",
    },
    assigned: {
        fontFamily: 'Poppins_400Regular',
        color: "#0F0F0F",
        fontSize:15,
        marginBottom: 10
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width:"100%",
        marginBottom:10
    },
    item__img: {
        height: 50,
        width: 50,
        borderRadius: 35,
        overflow: "hidden",
        borderWidth: 4,
        borderColor: "#fff",
        marginRight: 10
    },
    container__item: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
    },
    decline: {
        color: "#FF8585",
    },
    edit:{
        color:"#FFBD12"
    },
    complet:{
        color:"#7DA74D"
    },
    scrollViewContent: {
        marginTop:20,
        paddingBottom: 20, 
    },
    personalName:{
        fontFamily:"Poppins_400Regular",
        fontSize:15,
        color: "#0F0F0F"
    },

    options:{
        display:"flex",
        flexDirection:"row",
        width:120,
        justifyContent:"space-between",
        alignItems:"center",
        position:'relative'
    },
    options__item:{
        flex:1,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:100,
        
        
    }
});
