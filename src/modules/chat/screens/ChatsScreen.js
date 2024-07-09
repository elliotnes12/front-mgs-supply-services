import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { assets } from "../../../assets";
import { useAuth } from '../../Auth/hooks';
import { styles } from "../styles/chatsScreen.styles";
import { screens } from '../../../utils';
import { User } from '../../../api/user';
import { Chat } from '../api/Chat';
import { LoadingScreen } from '../../../components/core/LoadingScreen';
import { Header } from '../../../components/core/Header';
import { ChatItem } from '../../../components/core/ChatItem';


export function ChatsScreen() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { userInfo, isCustomer, accessToken, user } = useAuth();
  const { name } = userInfo;
  const userController = new User();
  const chatController = new Chat();
  
  const upTopChat = (chatId) => {
    const data = chats;
    const formIndex = data.map((chat) => chat.idChat).indexOf(chatId);
    const toIndex = 0;
    const element = data.splice(formIndex, 1)[0];
    data.splice(toIndex, 0, element);
    setChats([...data]);
  }

  useEffect(() => {
    (async () => {
      const { data } = await userController.getAllSupport(accessToken);
      setUsers(data);
      setFilteredUsers(data);
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      (async () => {
        try {
          const response = await chatController.getAll(accessToken);
          setChats(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    }, [])
  );

  useEffect(() => {
    if (!isCustomer) setFilteredUsers(users);
  }, [isCustomer, users]);

  const createChat = (idUser, name) => {
    (async () => {
      try {
        await chatController.create(accessToken, user._id, idUser);
        navigation.navigate(isCustomer ? screens.tab.chats.chatScreen : screens.tab.chats.ChatScreenSupervisor, { userId: idUser, userName: name });
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <ScrollView style={{ flex: 1, padding:0,margin:0 }} alwaysBounceVertical={false}>
       <Header title={"Support Chat"} />
       <View style={styles.container}>
        <Text style={styles.chatsTitle}>Support Team</Text> 
        <View style={styles.usersContainer}>
          <FlatList
            horizontal
            data={!isCustomer ? filteredUsers : users}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.usersList}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => createChat(item.id, item.name)}>
                <View style={styles.userItem}>
                  <View style={styles.userProfile}>
                    <Image style={styles.userImage} resizeMode="contain" source={assets.image.png.profile} />
                    <View style={[
                      styles.userStatus,
                      item.status === 'green' && styles.statusGreen,
                      item.status === 'yellow' && styles.statusYellow,
                      item.status === 'red' && styles.statusRed,
                      item.status === 'disconnected' && styles.statusDisconnected
                    ]} />
                  </View>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userRole}>Support</Text>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.5}
          />
        </View>
        
        <View style={styles.chatsHeader}>
          <Text style={styles.chatsTitle}>Chats</Text>
        </View>
        
        <View style={styles.recentChatsContainer}>
          {loading ? <LoadingScreen /> : (
            chats.length > 0 ? (
              chats.map(chat => (
                <ChatItem upTopChat={upTopChat} key={chat?.idChat?.toString()} chat={chat} isCustomer={isCustomer} token={accessToken} />
           
              ))
            ) : (
              <View style={styles.noChats}>
                <Text style={styles.noChatsText}>No chats found</Text>
              </View>
            )
          )}
        </View>
        </View>
    </ScrollView>
  );
}
