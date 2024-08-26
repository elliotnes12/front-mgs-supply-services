import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { User } from '../../../../api/user';
import { ChatItem } from '../../../../components/core/chat/ChatItem';
import { HeaderChats } from '../../../../components/core/HeaderChats';
import { LoadingScreen } from '../../../../components/core/LoadingScreen';
import { screens } from '../../../../utils';
import { getIconById } from '../../../../utils/util';
import { useAuth } from '../../../Auth/hooks';
import { Chat } from '../../api/Chat';
import { styles } from "../../styles/chatsScreen.employees.styles";
import { socket } from '../../../../utils';

export function ChatsScreenEmployee() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [chats, setChats] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { userInfo, isCustomer, accessToken, user } = useAuth();
  const { name } = userInfo;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [options] = useState(['New group', 'settings']);

  const userController = new User();
  const chatController = new Chat();

  useFocusEffect(
    useCallback(() => {
      return () => {
        setIsMenuVisible(false);
      };
    }, [])
  );
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

          if (response && response?.data) {
            const result = response.data.sort((a, b) => {
              const dateA = new Date(a.last_message_chat);
              const dateB = new Date(b.last_message_chat);
              return dateB - dateA;
            });
            setChats(result);
          }
        } catch (error) {
          setChats([])
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

  const handleQuestionSelect = (question) => {
    setIsMenuVisible(false);
  };

  const fnMenu = () => {
    setIsMenuVisible(true);
  };

  const handleClickOutside = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };


  if (!chats) return <LoadingScreen />;
  return (
    <TouchableWithoutFeedback onPress={handleClickOutside}>
      <View style={styles.background}>
        <HeaderChats fnMenu={fnMenu} />
        {isMenuVisible && (
          <View style={styles.menuChat}>
            {options.map((option, index) => (
              <TouchableOpacity style={index != options.length - 1 ? styles.menuChat__item : ''} key={index} onPress={() => handleQuestionSelect(option)}>
                <Text style={styles.menuChat__option}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 0 }}>
            <View style={styles.recentChatsContainer}>
              {(
                chats.length > 0 ? (
                  chats.map(chat => (
                    <ChatItem upTopChat={upTopChat} setMenu key={chat?.idChat?.toString()} chat={chat} isCustomer={isCustomer} token={accessToken} />
                  ))
                ) : (
                  <View style={styles.noChats}><Text style={styles.noChatsText}>Empty</Text></View>
                )
              )}
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(screens.tab.chats.chatContactsScreenEmployee)} style={styles.addChat}>
          {getIconById("iconAddChat")}
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
