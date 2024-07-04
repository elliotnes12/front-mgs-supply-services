import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { assets } from "../../../assets";
import { useAuth } from '../../Auth/hooks';
import { styles } from "../styles/chatsScreen.styles";
import { stylesGlobal } from '../../styles/global.style';
import { screens } from '../../../utils';
import { User } from '../../../api/user';
import { Chat } from '../api/Chat';
import { LoadingScreen } from '../../../components/core/LoadingScreen';
import { getIcon } from '../../../utils/util';

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
        navigation.navigate(isCustomer ? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer, { userId: idUser, userName: name });
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}>
      <SafeAreaView style={styles.container}>
        <View style={[stylesGlobal.itemHorizontal, { justifyContent: "space-between" }]}>
          <View>
            <Text style={styles.title}>Support</Text>
            <Text style={[styles.title, styles.containerTitle]}>Chat</Text>
          </View>
          <View style={stylesGlobal.imageMd}>
            <Image style={stylesGlobal.imageMin__img} resizeMode='contain' source={getIcon("icon-support")} />
          </View>
        </View>

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
                <TouchableOpacity key={chat.idChat.toString()} onPress={() => navigation.navigate(isCustomer ? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer, { userId: chat.id, userName: chat.name })}>
                  <View style={styles.chatItem}>
                    <View style={styles.chatItem__img}>
                      <Image style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.profile} />
                    </View>
                    <View style={styles.chatTextContainer}>
                      <Text style={styles.chatItem__name}>{chat.name}</Text>
                      <Text style={styles.chatItem__message}>So what can I do</Text>
                    </View>
                    <View style={styles.chatInfo}>
                      <Text style={styles.chatTime}>3:30pm</Text>
                      <View style={styles.totalMessageContainer}>
                        <Text style={styles.totalMessage}>2</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noChats}>
                <Text style={styles.noChatsText}>No chats found</Text>
              </View>
            )
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
