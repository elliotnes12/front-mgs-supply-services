import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    paddingLeft:24,
    paddingRight:24,
    marginTop:10,
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
    marginBottom:20
  },
  profile: {
    flexDirection: "row",
  },
  alerts: {
    height: 35,
    width: 35,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    position:"relative"
  },
  alerts__count:{
    width:25,
    height:25,
    top:-8,
    left:-10,
    zIndex:1,
    position:"absolute",
    backgroundColor:"#FF8585",
    borderRadius:12.5,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  alert__text:{
    color:"#fff"
  },
  goProfile: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#fff",
  },
  containerProfile: {
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#CEDC39",
    borderRadius: 37.5,
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: "center",
    minWidth: 100,
  },
  userInfo__hello: {
    fontFamily: "Poppins_400Regular",
    color: "#333333",
    fontSize: 16,
  },
  userInfo__name: {
    fontFamily: "Poppins_700Bold",
    color: "#333333",
    fontSize: 17,
  },
  promos: {
    height: 150,
    marginTop: 15,
    width:"100%",
    position: "relative",
  },
  promos__title:{
    color:"#fff",
    fontFamily:"Poppins_600SemiBold",
    width:180,
    fontSize:21,
    lineHeight:21,
    position:"absolute",
    bottom:40,
    left:20
  },
  promos__label:{
    borderRadius:10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:50,
    height:30,
    backgroundColor:"#fff",
    position:"absolute",
    top:20,
    left:20,
    opacity:0.7
  },
  bgpromos: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius:10,
  },
  bg_person: {
    height: 150,
    width: 120,
    position: "absolute",
    right:20,
    bottom: 0,
  },
  tabViewContainer: {
    flex: 1,
    marginTop: 5,
    width: "100%",
  },
  imageProfile: {
    width: "100%",
    height: "100%",
  },
  imageAlerts: {
    width: "100%",
    height: "100%",
  },
  promoText: {
    fontFamily: 'Poppins_700Bold',
    color: "#FFFFFF",
    fontSize: 20,
    position: "absolute",
    top: 100,
    left: 30,
  },
  promoLastService: {
    height:30,
    width:60,
    borderRadius:5,
    backgroundColor: "white",
    fontSize: 18,
    color: "#7EA74C",
    position: "absolute",
    top: 20,
    left: 30,
    padding: 5,
  },

  options:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:0
  },
  titleCategories:{
    color:"#333333",
    fontFamily:"Poppins_700Bold",
    fontSize:20,
    marginTop:5
  },
  options__all:{
    color:'#7DA74D'
  },
  options__title:{
    color: "#333333",
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,  
  },
});
