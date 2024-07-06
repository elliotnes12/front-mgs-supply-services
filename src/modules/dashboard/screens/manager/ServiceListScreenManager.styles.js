import { StyleSheet } from 'react-native';
import { Border, Color, FontSize } from '../../../../utils/constantsStyle';

export const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: "relative",

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
  },
  tabStyle: {
    marginBottom:5,
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
    fontFamily: 'Poppins_400Regular',
    fontSize: FontSize.headline16_size,
    lineHeight: 24,
  },
  tabTextFocused: {
    color: '#fff',
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "#333",
    borderRadius: Border.br_3xs,
    height: 120,
    backgroundColor: Color.blanco,
    paddingTop:10
  },
  item__title: {
    fontFamily: 'Poppins_600SemiBold',
    color: Color.secondaryColor,
    lineHeight: 18,
    letterSpacing: 0.3,
    fontSize: FontSize.headline16_size,
    fontWeight: "500",
  },
  item_subtitle: {
    color: "#0F0F0F",
    fontFamily: 'Poppins_300Light',
    fontSize: FontSize.paragraphRegularSmall_size,
  },
  item__estatus:{
    color: Color.fontWhite,
    fontWeight: "300",
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.paragraphRegularSmall_size,
  },
  item__flechaContainer: {
    width: 24,
    height: 24,
    marginRight: 0,
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
    position:'absolute',
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:15
  },
  options__title:{
    color: Color.gray1,
    fontFamily: 'Poppins_700Bold',
    fontSize: FontSize.h3_size,
    textTransform: "capitalize",
    fontWeight: "500",
    lineHeight: 24, 
  },
  options__all:{
    color: Color.colorSecundario,
    fontFamily:"Poppins_500Medium",
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
});