import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
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
import { LinearGradient } from 'expo-linear-gradient';

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
    const formIndex = data.map((chat) => chat.idChat).indexOf(chatId);
    const toIndex = 0;
    const element = data.splice(formIndex, 1)[0];
    data.splice(toIndex, 0, element);
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
    <View style={styles.background}>
      <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.chats_header}>
        <SafeAreaView style={styles.chats_header__content}>
          <Text style={{ color: "#fff", fontFamily: "Poppins_600SemiBold" }}>{"mgs supply & services".toUpperCase()}</Text>
          <View style={[styles.chatsOptions, stylesGlobal.itemHorizontal]} >
            <TouchableOpacity style={stylesGlobal.imageMin}>
              <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconoLupaWhite} />
            </TouchableOpacity>
            <TouchableOpacity style={stylesGlobal.imageMin}>
              <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconoMenuVertical} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 0 }}>
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
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.addChat}>
        <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconAddChat} />
      </TouchableOpacity>
    </View>
  );
}
