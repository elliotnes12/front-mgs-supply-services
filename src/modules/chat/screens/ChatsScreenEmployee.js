import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { assets } from "../../../assets";
import { useAuth } from '../../Auth/hooks';
import { styles } from "../styles/chatsScreen.employees.styles";
import { stylesGlobal } from '../../styles/global.style';
import { screens } from '../../../utils';
import { User } from '../../../api/user';
import { Chat } from '../api/Chat';
import { LoadingScreen } from '../../../components/core/LoadingScreen';
import { ChatItem } from '../../../components/core/ChatItem';

export function ChatsScreenEmployee() {
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

  useEffect(() => {
    (async () => {
      const { data } = await userController.getAll(accessToken);
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
          if (response && response.data) {
            const result = response.data.sort((a, b) => {
              const dateA = new Date(a.last_message_chat);
              const dateB = new Date(b.last_message_chat);
              return dateB - dateA;
            });
  
            console.log("Sorted chats:", result);
            setChats(result);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    }, [])
  );
  

  const upTopChat = (chatId) => {

      const data = chats;
      const formIndex = data.map( (chat) => chat.idChat).indexOf(chatId);
      const toIndex = 0;
      const element = data.splice(formIndex,1)[0];
      data.splice(toIndex,0,element);
      setChats([...data]);

  }

  useEffect(() => {
    if (!isCustomer) setFilteredUsers(users);
  }, [isCustomer, users]);

  const createChat = (idUser, name) => {
    (async () => {
      try {
        await chatController.create(accessToken, user._id, idUser);
        navigation.navigate(isCustomer ? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer, { userId: idUser, userName: name });
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    setFilteredUsers(users.filter(user => user.name === text));
  };

  return (
    <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}>
      <SafeAreaView style={styles.container}>
        <View><Text style={[styles.title, styles.containerTitle]}>Chat</Text></View>
        <View style={[stylesGlobal.itemHorizontal, styles.searchInput]}>
          <View style={stylesGlobal.imageMin}>
            <Image alt='icon-support' style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.iconLupa} />
          </View>
          <TextInput
            style={styles.searchInput__input}
            placeholder="Search by name or ID"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <View style={styles.usersContainer}>
          <FlatList
            horizontal
            data={!isCustomer ? filteredUsers : users}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.usersList}
            renderItem={({ item }) => (
              <TouchableOpacity key={item.id.toString()} onPress={() => createChat(item.id, item.name)}>
                <View style={styles.userItem}>
                  <View style={styles.userProfile}>
                    {item.image ? (
                      <View style={styles.chatItem__img}>
                        <Image style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.profile} />
                      </View>
                    ) : (
                      <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: "#CEDC39", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#000", fontSize: 18 }}>{item?.name?.substring(0, 2).toUpperCase()}</Text>
                      </View>
                    )}
                    <View style={[
                      styles.userStatus,
                      item.status === 'green' && styles.statusGreen,
                      item.status === 'yellow' && styles.statusYellow,
                      item.status === 'red' && styles.statusRed,
                      item.status === 'disconnected' && styles.statusDisconnected
                    ]} />
                  </View>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userRole}>{item.type}</Text>
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
              <View style={styles.noChats}><Text style={styles.noChatsText}>Empty</Text></View>
            )
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
