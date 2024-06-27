import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

   container: {
      paddingHorizontal: 24,
      paddingTop: 20,
   },
   header: {
      height: 155,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      paddingLeft: 20,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25
   },
   header__content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
   },
   title: {
      fontFamily: "Poppins_600SemiBold",
      color: "#fff",
      fontSize: 24,
      lineHeight: 25
   },
   subTitle: {
      fontFamily: "Poppins_400Regular",
      color: "#fff",
      fontSize: 15
   },
   textGray: {
      color: "#828282"
   },
   titleServices: {
      fontFamily: "Poppins_400Regular",
      fontSize: 17,
   },
   flatListContainer: {
      paddingLeft: 0
   },
   item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 60,
      position: "relative"
   },
   employees: {
      width: "100%",
      marginTop: 10,
      marginBottom: 15
   },
   street: {
      flex: 1,
      paddingRight: 20
   },
   street__googleMaps: {
      fontFamily: "Poppins_400Regular",
      color: "#7DA74D",
      textDecorationLine: "underline"
   },
   street__label: {
      fontFamily: "Poppins_400Regular",
   },
   bussiness: {
      marginTop: 10,
      marginBottom: 15
   },
   bussiness__title: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 19,
      marginBottom: 10
   },
   bussiness__name: {
      fontFamily: 'Poppins_400Regular',
      padding: 10,
      fontSize: 15
   },
   bussiness__additional: {
      fontFamily: 'Poppins_400Regular',
      padding: 10,
      fontSize: 15
   },
   textArea: {
      height: 100,
      justifyContent: 'flex-start',
      textAlignVertical: 'top',
      borderColor: '#828282',
      borderWidth: 1,
      padding: 10,
   },
   submit: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row"
   },
   button: {
      position: "relative",
      width: 240,
      height: 50,
      borderRadius: 25,
      marginBottom: 70,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
   },
   button__text: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 16,
      color: "#fff"
   }
});