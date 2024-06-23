import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 25,
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
    width: 400,

    
    position: "relative",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ABABAB',
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
  },
  searchIcon: {
    width: 27,
    height: 27,
    marginLeft: 15,
  },
  searchInput: {
    height: 45,
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#CEDC39',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 61,
    width: 56,
    borderRadius: 4,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bgpromos: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  promos__bgman: {
    height: 150,
    width: 120,
    position: "absolute",
    left:220,
    bottom: 0,
  },
  tabViewContainer: {
    flex: 1,
    marginTop: 5,
    width: "100%",
  },
  tituloCategorias: {
    color: "#333333",
    fontFamily: 'Poppins_700Bold',
    marginTop: 10,
    fontSize: 24,
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
  promoDaysAgo: {
    color: "#FFFFFF",
    position: "absolute",
    top: 180,
    left: 40,
  },
  promoRating: {
    fontSize: 18,
    color: "#FFFFFF",
    position: "absolute",
    top: 30,
    left: 30,
  },
  promoTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 21,
    color: "#FFFFFF",
    position: "absolute",
    top: 70,
    left: 30,
  },
  promoClock: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 180,
    left: 10,
  },
  promoStar: {
    width: 18,
    height: 18,
    position: "absolute",
    top: 33,
    left: 158,
  },
  options:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10
  },
  titleChooseCategory:{
    color:"#333333",
    fontFamily:"Poppins_700Bold",
    fontSize:20
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
