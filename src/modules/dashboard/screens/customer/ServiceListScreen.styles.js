import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position:"relative"
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
  },
  tabStyle: {
    width: 120,
    height: '100%',
  },
  tabItem: {
    height: '100%',
    width: 110,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection:"row"
  },
  gradient: {
    width: 110,
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
    top:-15,
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
    top:-50,
    left:120,
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
  title:{
    fontSize:15,
    right:115,
    color:'#333333',
    fontFamily:'Poppins_700Bold',
  },
  viewAll:{
    left:140,
    top:-25,
    color:"#7DA74D"
  },
  calificacion:{
  left:15,
  },
  fecha:{
    fontSize:10,
    left:120,
    fontFamily: 'Poppins_400Regular',
    color:"#C4C4C4"
  },
  item__calendar:{
    top:-45,
    left:220,
    width: 15,
    height: 15,
    marginRight: 20,
  }
});
