import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { assets } from "../../../assets";
import { useAuth } from '../../Auth/hooks';
import { styles } from "../styles/chatsScreen.styles";
import { useEffect } from 'react';
import { stylesGlobal } from '../../styles/global.style';
import { screens } from '../../../utils';
import { User } from '../../../api/user';
import { useCallback } from 'react';
import { Chat } from '../api/Chat';





export function ChatsScreenEmployee() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [chats,setChats] = useState([])
  const navigation = useNavigation();
  const { userInfo, isCustomer, accessToken ,user} = useAuth();
  const { name } = userInfo;


  const userController = new User();
  const chatController = new Chat();

  console.log(user._id)

  useEffect(() => {

    (async () => {

      const users = await userController.getAll(accessToken);
      const { data } = users;
      setUsers(data);
      setFilteredUsers(data);

      console.log(users.data);

    })();


  }, [])


  useFocusEffect(
    useCallback(() => {

      (async () => {

        try{

            const response = await chatController.getAll(accessToken);
            setChats(response.data);
           
        }
        catch(error){

        }
      })()

    }, [])
  )


  useEffect(() => {
    if (!isCustomer) {
      setFilteredUsers(users);
    }
  }, []);


  const createChat = (idUser,name) =>{

    (async() =>{

        try{

          await chatController.create(accessToken,user._id,idUser);
          navigation.navigate(isCustomer ? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer, { userId: idUser, userName: name });
        }
        catch(error){

        }
    })()
  }

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase()) || user.id === text.toLowerCase()
    );
    setFilteredUsers(filtered);

  };
  return (

    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView style={styles.container}>


          <View>
            <Text style={[styles.title, styles.containerTitle]}>Chat</Text>
          </View>

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
                <TouchableOpacity onPress={() => createChat(item.id,item.name)}>
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
                      <Text>{item.type}</Text>
                    </View>
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
            {chats.length > 0 ? (
              chats.map(chat => (
                <TouchableOpacity key={chat.id} onPress={() => navigation.navigate(isCustomer ? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer, { userId: chat.id, userName: chat.name })}>
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
                <Text style={styles.noChatsText}>Empty</Text>
              </View>
            )}
          </View>


        </SafeAreaView>

      </ScrollView>
    </View>
  );
}

