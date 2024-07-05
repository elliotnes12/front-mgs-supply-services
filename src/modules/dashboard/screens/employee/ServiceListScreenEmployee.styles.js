import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: "relative",
    marginTop:20

  },
  flatListContainer:{
     flex: 1,
     margin:0,
     padding:0,
     height:'auto'
  },
  backgroundWhite: {
    backgroundColor: '#fff',
  },
  backgroundOrange: {
    backgroundColor: '#ff9800',
  },
  indicatorStyle: {
    backgroundColor: 'transparent',
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#fff',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 10
  },
  tabStyle: {
    width: 130,
    height: '100%',
    marginRight:5
  },
  tabItem: {
    backgroundColor: "#F5F5F5",
    height: '100%',
    width: 130,
    margin: 0,
    paddingBottom: 8,
    paddingTop: 8,
    marginLeft: 0,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: "row",
   

  },
  gradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
  },
  tabText: {
    color: '#ABABAB',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  tabTextFocused: {
    color: '#fff',
    fontSize: 16,
  },
  iconServices: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  item__img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  item__text: {
    top: -15,
    paddingTop: 20,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    marginBottom: 5,
    height:120
  },
  item__title: {
    color: "#0F0F0F",
    fontFamily: 'Poppins_600SemiBold',
  },
  item_subtitle: {
    color: "#0F0F0F",
    fontFamily: 'Poppins_400Regular',
  },
  item__estatus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"

  },
  item__flechaContainer: {
    width: 24,
    height: 24,
    marginRight: 20,
    position: 'absolute',
    right: 0,
    top: '50%',
  },
  item__ratingContainer: {
    width: 24,
    height: 24,
    marginRight: 20,
    position: 'relative',
    left: 15,
    bottom: '15%',
  },
  imageFullSize: {
    width: '100%',
    height: '100%',
  },
  tabViewContainer: {
    flex:1,
    width: "100%",
  },
  fecha: {
    left: 15,
    color: "#C4C4C4",
    fontFamily: 'Poppins_400Regular',
  },
  item__calendario: {
    width: 15,
    height: 15,
    left: 0,
    top: 66,
    position: 'absolute'
  },
  progress: {
    fontSize: 17,
    color: "#FFFFFF",
    top: -37,
    left: 85,
    position: 'absolute',
  },
  estatus: {
    width: 110,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 10,
    height: 25,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aprobado: {
    backgroundColor: "#ECB403",
  },
  canceled: {
    backgroundColor: "#FF8585",
  },
  success: {
    backgroundColor: "#7DA74D",
  },
  item__date: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 120,
    marginTop: 5,
    justifyContent: "flex-start",
  },
  item__datetext: {
    color: "#333",
    fontSize: 12,
    marginLeft: 5,
  },
  options:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:0
  },
  options__title:{
    color: "#333333",
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,  
  },
  options__all:{
    color:'#7DA74D'
  },
});
