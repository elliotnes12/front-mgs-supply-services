import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Auth/hooks';
import { styles } from "../styles/chatsScreen.styles";
import { screens } from '../../../utils';
import { User } from '../../../api/user';
import { Chat } from '../api/Chat';
import { LoadingScreen } from '../../../components/core/LoadingScreen';
import { Header } from '../../../components/core/Header';
import { getIconById } from '../../../utils/util';
import { ChatItemCustomer } from '../../../components/core/ChatItemCustomer';
import StyledText from '../../../utils/globalstyle';


export function ChatsScreen() {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [chats, setChats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingSupport, setLoadingSupport] = useState(false)
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
      setLoadingSupport(true)
      try {
        const { data } = await userController.getAllSupport(accessToken);

        setUsers(data);
      } catch (error) {

        console.log("support")
        console.log(error)
        setUsers([])
      } finally {
        setLoadingSupport(false)
      }
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      (async () => {
        try {
          const { data } = await chatController.getAll(accessToken);
          setChats(data);
        } catch (error) {
          console.log(error)
          setChats([])
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

        const response = await chatController.create(accessToken, user._id, idUser);
        const { chatId } = response.data;

        navigation.navigate(screens.tab.chats.chatScreen, { chatId: chatId, userName: name });
      } catch (error) {
      }
    })();
  };

  const RenderItemUser = ({ item }) => {
    return (
      <TouchableOpacity key={item?.id} onPress={() => createChat(item.id, item.name)}>
        <View style={styles.userItem}>
          <View style={styles.contImage}>
            <View style={styles.userImage}>
              {getIconById("iconAvatar")}
            </View>
          </View>
          <StyledText regularGray>{item.name}</StyledText>
          <Text style={styles.userRole}>Support</Text>

        </View>
      </TouchableOpacity>
    )
  }


  if (!users) return <LoadingScreen />;

  return (
    <ScrollView style={{ flex: 1, padding: 0, margin: 0 }} alwaysBounceVertical={false}>
      <Header title={"Chat"} headerType={"headerContact"} support={true} />
      <View style={styles.container}>
        <Text style={styles.chatsTitle}>Support Team</Text>
        <View style={styles.usersContainer}>
          {users && users?.length > 0 ? (
            <FlatList
              horizontal
              data={users}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <RenderItemUser item={item} />}
              contentContainerStyle={styles.usersList}
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={0.5}
            />

          ) : (
            <>
              <View style={styles.noChats}>
                <Text style={styles.noChatsText}>Support users not available</Text>
              </View>
            </>
          )}
        </View>

        <View style={styles.chatsHeader}>
          <Text style={styles.chatsTitle}>Chats</Text>
        </View>

        <View style={styles.recentChatsContainer}>
          {
            chats && chats?.length > 0 ? (
              chats.map(chat => (

                <ChatItemCustomer upTopChat={upTopChat} setMenu key={chat?.idChat?.toString()} chat={chat} isCustomer={isCustomer} token={accessToken} />

              ))
            ) : (

              <View style={styles.noChats}>
                <Text style={styles.noChatsText}>No chats not found</Text>
              </View>

            )
          }
        </View>
      </View>
    </ScrollView>
  );
}
