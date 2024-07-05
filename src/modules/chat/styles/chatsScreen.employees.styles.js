import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chats_header: {
    height: 100,
  },
  chats_header__content: {
    paddingHorizontal: 22,
    paddingTop: 10,
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
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
    width: 45,
    height: 45,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#7DA74D"
  },
});
