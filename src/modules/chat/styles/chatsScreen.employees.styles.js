import { StyleSheet } from 'react-native';
import { Color } from '../../../utils/constantsStyle';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 15,
  },
  recentChatsContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  noChats: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    height: 200,
  },
  noChatsText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#333',
  },
  addChat: {
    position: "absolute",
    bottom: 25,
    right: 20,
    width: 55,
    height: 55,
    padding: 10,
    borderRadius: 27.5,
    backgroundColor: "#7DA74D",
    paddingRight:15,
    paddingTop:15
  },
  menuChat: {
    position: 'absolute',
    width: 140,
    top: 90,
    zIndex: 4,
    right: 35,
    borderWidth: 0.4,
    borderColor: Color.gray1,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 30,
    shadowRadius: 10,
    shadowColor: Color.gray1,
  },
  menuChat__item: {
    borderBottomWidth: 0.4,
    borderBottomColor: Color.gray1
  },
  menuChat__option: {
    padding: 10,
    fontFamily:'Poppins_500Medium',
    fontSize:12,
    backgroundColor: "#fff",
    marginBottom: 5,
    paddingLeft:15
  }
});
