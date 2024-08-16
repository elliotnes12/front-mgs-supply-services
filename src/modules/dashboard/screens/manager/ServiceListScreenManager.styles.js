import { StyleSheet } from 'react-native';
import { Color, FontSize, fontFamily } from '../../../../utils/constantsStyle';

export const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: "relative",
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
  tabStyle: {
    marginBottom: 5,
    width: 130,
    height: '100%',
    marginRight: 5
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
  gradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
  },
  flatListContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
    height: 'auto'
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
  tabViewContainer: {
    flex: 1,
    width: "100%",
  },
  fecha: {
    left: 15,
    color: "#C4C4C4",
    fontFamily: 'Poppins_400Regular',
  },

  options: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 15,
  },
  options__title: {
    color: Color.gray1,
    fontFamily: 'Poppins_700Bold',
    fontSize: FontSize.h3_size,
    textTransform: "capitalize",
    fontWeight: "500",
    lineHeight: 24,
  },
  options__all: {
    color: Color.colorSecundario,
    fontFamily: fontFamily.fontRegular,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
});
