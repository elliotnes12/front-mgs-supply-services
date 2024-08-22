import { StyleSheet } from "react-native";
import { Color } from "../../../utils/constantsStyle";
import { theme } from "../../../utils/theme";

export const styles = StyleSheet.create({
    header: {
        height: 120,
        display: "flex",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 20,
        paddingTop: 35,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        position: "relative",
    },
    header__content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 10
    },
    headerContacts__content: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingTop: 10
    },
    title: {
        color: "#fff",
        fontSize: 22,
        fontFamily: theme.textStyles.bold,
        lineHeight: 29,
        textAlign: "left",
        fontWeight: "500",
    },
    titleContact: {
        color: Color.gray1,
        fontSize: 17,
        fontFamily: theme.textStyles.bold,
        lineHeight: 29,
        textAlign: "left",
        fontWeight: "500",
    },
    subtitle: {
        color: "#fff",
        fontFamily: theme.textStyles.regular,
        fontSize: 15,
    },
    containerSearch: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        height: 52,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ABABAB"
    },
    globalSearch: {
        width: "90%",
        position: "absolute",
        left: "2.5%",
        bottom: -70,
        display: "none"
    },
    btnSearch: {
        height: "100%",
        width: 61,
        paddingLeft: 7,
        borderRadius: 10,
        backgroundColor: "#CEDC39",
        marginLeft: "2.5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    profile__name: {
        fontFamily: theme.textStyles.semiBold,
        fontSize: 17,
        lineHeight: 20,
        fontWeight: "600",
        color: "#fff"
    },
    profile__content: {
        fontFamily: theme.textStyles.semiBold,
        color: "#fff",
        fontSize: 13
    },
    profile__image: {
        padding: 3,
        backgroundColor: "#fff",
        borderRadius: 30,
        marginRight: 10,

    },
    totalContacts: {
        color: "#46526a",
        textAlign: "left",
        height:"100%",
        paddingTop:2,
        flex:2
    }
});
