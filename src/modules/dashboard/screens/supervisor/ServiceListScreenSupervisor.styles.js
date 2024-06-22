import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  scene: {
    left:205,
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    position:"relative",
  
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
    backgroundColor:'#fff',
    width: '100%',
    shadowColor: '#fff',
    paddingLeft: 0, // Elimina el padding izquierdo
    paddingRight: 0,
  },
  tabStyle: {
    flexDirection:'row',
    width: 150,
    height: '100%',
  },
  tabItem: {
    height: 46,
    width: 140,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection:"row",
    position:"relative",
    zIndex:4
  },
  gradient: {
    height: 46,
    width: 140,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection:"row",
    position:"relative",
    zIndex:4
  },
  tabText: {
    color: '#ABABAB',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    flexDirection:'row',
  },
  tabTextFocused: {
    color: '#fff',
    fontSize: 15,
    flexDirection:'row',
  },
  iconServices: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  item: {
    right:200,
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    marginBottom: 15,
  },
  item__img: {
    right:10,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  item__text: {
    paddingTop: 20,
    flex: 1,
  },
  item__title: {
    fontFamily: 'Poppins_700Bold',
  },
  item__paddingTop15: {
    paddingTop: 15,
  },
  item__estrellaContainer: {
    width: 15,
    height: 15,
    marginRight: 20,
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
    width:"100%",
  },
  fecha:{
    left:50,
    color:"#C4C4C4",
    fontFamily: 'Poppins_400Regular',
  },
  item__calendario:{
    width: 15,
    height: 15,
    marginRight: 20,
    position: 'relative',
    right:-30,
    top:-55,
  },
  aprovado:{
    width: '100%',
    backgroundColor:'red',
    height: 20,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection:"row"
    
    
  }
});
