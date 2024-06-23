import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: "relative"
  },

  options: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  titleCategories: {
    color: "#333333",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    marginTop: 5
  },
  options__all: {
    color: '#7DA74D'
  },
  options__title: {
    color: "#333333",
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  indicatorStyle: {
    backgroundColor: 'transparent',
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#fff',
  },
  tabStyle: {
    width: 130,
    height: '100%',
  },
  tabItem: {
    backgroundColor:"#F5F5F5",
    height: '100%',
    width: 120,
    margin:0,
    paddingBottom:8,
    paddingTop:8,
    marginLeft:0,
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
  item: {
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    marginBottom: 15,
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
  item__title: {
    color:"#0F0F0F",
    fontFamily: 'Poppins_600SemiBold',
  },
  item_subtitle:{
    color:"#0F0F0F",
    fontFamily: 'Poppins_400Regular',
  },
  item__raiting:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    width:40,
    marginTop:5,
    justifyContent:"space-between",
  },
  item__date:{
    position: "absolute",
    right:0,
    bottom:0,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    width:120,
    marginTop:5,
    justifyContent:"flex-start",
  },
  item__datetext:{
    color:"#333",
    fontSize:12,
    marginLeft:5,
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
    height: 500,
    width: "100%",
  },
  title: {
    fontSize: 15,
    color: '#333333',
    fontFamily: 'Poppins_600SemiBold',
  },

});
