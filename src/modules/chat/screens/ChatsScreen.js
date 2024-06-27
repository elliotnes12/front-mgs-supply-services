import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { assets } from "../../../assets";
import { useAuth } from '../../Auth/hooks';
import { styles } from "../styles/chatsScreen.styles";
import { useEffect } from 'react';
import { stylesGlobal } from '../../styles/global.style';
import { ENV, screens } from '../../../utils';

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
  { id: 3, name: 'Esther', lastMessage: 'Can we reschedule our meeting?', time: '11:45 AM', unreadCount: 5 },

  { id: 2, name: 'Jane Smith', lastMessage: 'Can we reschedule our meeting?', time: '11:45 AM', unreadCount: 5 },
];



export function ChatsScreen() {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigation = useNavigation();
  const { userInfo, isCustomer } = useAuth();
  const { name } = userInfo;


  useEffect(() => {
    if (!isCustomer) {
      setFilteredUsers(users);
    }
  }, []);


  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase()) || user.id.toString() === text.toLowerCase()
    );
    setFilteredUsers(filtered);

  };
  return (

    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView style={styles.container}>


          {isCustomer &&

            <View style={styles.header__customer}>
              <View style={styles.containerTitle}>
                <Text style={styles.title}>Chat</Text>
                <Text style={styles.title}>Support</Text>
              </View>

              <Image alt='icon-support' style={{ width: 40, height: 40 }} resizeMode="contain" source={assets.image.png.iconSupport} />
            </View>
          }

          {!isCustomer &&

            <>

              <View>
                <Text style={[styles.title, styles.containerTitle]}>Chat</Text>
              </View>

              <View style={[stylesGlobal.itemHorizontal,styles.searchInput]}>
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
            </>

          }

          <View style={styles.usersContainer}>
            <FlatList
              horizontal
              data={!isCustomer ? filteredUsers : users}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.usersList}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate(isCustomer? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer, { userId: item.id, userName: item.name })}>
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
                        <Text style={styles.userRole}>Support</Text>
                      ) : (
                        <View style={styles.emptyRole} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={0.5}
            />
          </View>

          {/* Sección de Chats Recientes */}
          <View style={styles.chatsHeader}>
            <Text style={styles.chatsTitle}>Chats</Text>
          </View>
          <View style={styles.recentChatsContainer}>
            {chats.length > 0 ? (
              chats.map(chat => (
                <TouchableOpacity key={chat.id} onPress={() => navigation.navigate(isCustomer? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer , { userId: chat.id, userName: chat.name })}>
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


        </SafeAreaView>

      </ScrollView>
    </View>
  );
}



export default ChatsScreen;
