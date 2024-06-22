import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; // Importa LinearGradient
import { assets } from "../../../assets"; // Ajusta la ruta de tus assets si es necesario

const initialUsers = [
  { id: 1, name: 'John Doe', role: 'Manager', status: 'green' },
  { id: 2, name: 'Jane Smith', role: 'Employee', status: 'yellow' },
  { id: 3, name: 'Sam Wilson', role: 'Employee', status: 'red' },
  { id: 4, name: 'Alice Johnson', status: 'disconnected' },
];

const moreUsers = [
  { id: 5, name: 'Peter Parker', role: 'Intern', status: 'green' },
  { id: 6, name: 'Bruce Wayne', role: 'CEO', status: 'yellow' },
];

const chats = [
  { id: 1, name: 'John Doe', lastMessage: 'Hello, how are you?', time: '12:30 PM', unreadCount: 2 },
  { id: 2, name: 'Jane Smith', lastMessage: 'Can we reschedule our meeting?', time: '11:45 AM', unreadCount: 5 },
];

const messages = [
  { id: 1, content: 'Message 1' },
  { id: 2, content: 'Message 2' },
  // Agrega más mensajes según sea necesario
];

export function ChatsScreen() {
  const [users, setUsers] = useState(initialUsers);
  const navigation = useNavigation();

  const loadMoreUsers = () => {
    // Aquí puedes implementar la lógica para cargar más usuarios si es necesario
  };

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        {/* Fondo transparente */}
        <View style={styles.transparentBackground} />
          <Text style={styles.title}>Chat</Text>
          <View style={styles.usersContainer}>
            <FlatList
              horizontal
              data={users}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.usersList}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { userId: item.id })}>
                  <View style={styles.userItem}>
                    <View style={styles.userProfile}>
                      <Image style={styles.userImage} resizeMode="cover" source={assets.image.png.profile} />
                      <View style={[
                        styles.userStatus,
                        item.status === 'green' && styles.statusGreen,
                        item.status === 'yellow' && styles.statusYellow,
                        item.status === 'red' && styles.statusRed,
                        item.status === 'disconnected' && styles.statusDisconnected
                      ]} />
                    </View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <View style={styles.userRoleContainer}>
                      {item.role ? (
                        <Text style={styles.userRole}>{item.role}</Text>
                      ) : (
                        <View style={styles.emptyRole} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              onEndReached={loadMoreUsers}
              onEndReachedThreshold={0.5}
            />
          </View>

          {/* Sección de Chats Recientes */}
          <View style={styles.chatsHeader}>
            <Text style={styles.chatsTitle}>Chats</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllChats')}>
              <Text style={styles.allChatsLink}>All Chats</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recentChatsContainer}>
            {chats.length > 0 ? (
              chats.map(chat => (
                <TouchableOpacity key={chat.id} onPress={() => navigation.navigate('ChatDetail', { idchat: chat.id })}>
                  <View style={styles.chatItem}>
                    <Image style={styles.chatImage} resizeMode="cover" source={assets.image.png.profile} />
                    <View style={styles.chatTextContainer}>
                      <Text style={styles.chatName}>{chat.name}</Text>
                      <Text style={styles.chatMessage}>{chat.lastMessage}</Text>
                    </View>
                    <View style={styles.chatInfo}>
                      <Text style={styles.chatTime}>{chat.time}</Text>
                      {chat.unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                          <Text style={styles.unreadBadgeText}>{chat.unreadCount}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noChats}>
                <Text style={styles.noChatsText}>0 Chats</Text>
              </View>
            )}
          </View>

          <View style={styles.chatsHeader}>
            <Text style={styles.chatsTitle}>Messages</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllChats')}>
              <Text style={styles.allChatsLink}>All Messages</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recentChatsContainer}>
            {chats.length > 0 ? (
              chats.map(chat => (
                <TouchableOpacity key={chat.id} onPress={() => navigation.navigate('ChatDetail', { idchat: chat.id })}>
                  <View style={styles.chatItem}>
                    {/* Círculo con borde gradient */}
                    <LinearGradient
                      style={styles.chatImage}
                      colors={['#CEDC39', '#7DA74D']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Image style={styles.imgMessage}  source={assets.image.png.message} />

                     </LinearGradient> 
                    <View style={styles.chatTextContainer}>
                      <Text style={styles.chatName}>{chat.name}</Text>
                      <Text style={styles.chatMessage}>{chat.lastMessage}</Text>
                      <Text style={styles.unread}>unread</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noChats}>
                <Text style={styles.noChatsText}>0 Messages</Text>
              </View>
            )}
          </View>
      </SafeAreaView>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingBottom: 10,
    
  },
  scrollContainer: {
    flexGrow: 1,
  },
  transparentBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
    marginTop:20
  },
  usersContainer: {
    marginBottom: 25,
  },
  usersList: {
    alignItems: 'center',
  },
  userItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  userProfile: {
    position: 'relative',
    marginBottom: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userStatus: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  statusGreen: {
    backgroundColor: '#7DA74D',
  },
  statusYellow: {
    backgroundColor: 'yellow',
  },
  statusRed: {
    backgroundColor: 'red',
  },
  statusDisconnected: {
    backgroundColor: 'grey',
  },
  userName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: '#333',
  },
  userRoleContainer: {
    height: 20,
  },
  userRole: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#666',
  },
  emptyRole: {
    height: 20,
  },
  chatsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chatsTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#333',
  },
  allChatsLink: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#7DA74D',
    textDecorationLine: 'none',
  },
  recentChatsContainer: {
    marginBottom: 20,
  },
  chatItem: {
    backgroundColor: "#fff",
    height: 73,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent:"center",
    alignItems:"center"
  },
  imgMessage:{
    width:25,
    height:25
  },
  chatTextContainer: {
    flex: 1,
    marginLeft: 10,
    position:"relative"
  },
  chatName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#333',
  },
  chatMessage: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#C4C4C4',
  },
  chatInfo: {
    alignItems: 'flex-end',
  },
  chatTime: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#C4C4C4',
  },
  unreadBadge: {
    backgroundColor: '#CEDC39',
    borderRadius: 10.5,
    width:21,
    height:21,
    marginTop: 5,
    justifyContent:"center",
    alignItems:"center",
  },
  unreadBadgeText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 12,
    color: '#fff',
  },
  noChats: {
    alignItems: 'center',
  },
  noChatsText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#333',
  },
  messagesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  messagesTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#333',
  },
  unread:{
     backgroundColor:"#E8E8E8",
     fontFamily: 'Poppins_400Regular',
     color:"#565656",
     borderRadius:20,
     width:65,
     textAlign:"center",
     padding:2,
     position:"absolute",
     right:0
  },
  allMessagesLink: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#7DA74D',
    textDecorationLine: 'none',
  },
  messagesContainer: {
    marginBottom: 20,
  },
  messageItem: {
    marginBottom: 15,
    // Sombras en la parte inferior de los ítems de mensaje
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, // Para Android
  },
  messageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContent: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: '#fff',
  },
});

export default ChatsScreen;
