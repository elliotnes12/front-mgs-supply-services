import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { stylesGlobal } from "../../../modules/styles/global.style";
import { styles } from "../styles/ChatItem.styles";
import { isEmpty } from "lodash";
import { ENV, screens, socket } from "../../../utils";
import { Chat } from "../../../modules/chat/api/Chat";
import { useAuth } from "../../../modules/Auth/hooks";
import { ChatMessage } from "../../../modules/chat/api/chatMessage";
import { UnreadMessages } from "../../../modules/chat/api/unreadMessages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import StyledText from "../../../utils/globalstyle";

export function ChatItem({ chat, isCustomer, upTopChat }) {
  const navigation = useNavigation();
  const [lastMessage, setLastMessage] = useState();
  const { user, accessToken } = useAuth();
  const [totalUnreadMessages, setTotalUnreadMessages] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0);
  const isFocused = useIsFocused();

  const chatController = new Chat();
  const chatControllerMessage = new ChatMessage();
  const unreadMessagesController = new UnreadMessages();

  const newMessage = async (message) => {
    setLastMessage(message);
    if (message.chat == chat?.idChat) {
      if (user._id !== message.user._id) {
        upTopChat(message.chat);

        const activeChatId = await AsyncStorage.getItem(ENV.ACTIVE_CHAT_ID);

        if (activeChatId !== message.chat) {
          setTotalUnreadMessages((prevState) => prevState + 1);
        }
      }
    }
  };

  useEffect(() => {
    if (isFocused) {
      //Ejecuta la cache no manda llamar de nuevo a los servicios cuando hago go back

      (async () => {
        try {
          const { data } = await chatControllerMessage.getTotal(
            accessToken,
            chat.idChat
          );

          setTotalMessages(data.total);

          const totalReadMessages =
            await unreadMessagesController.getTotalReadMessages(chat.idChat);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [isFocused]);

  useEffect(() => {
    const fetchLastMessage = async () => {
      try {
        const response = await chatController.getLastMessage(
          accessToken,
          chat?.idChat
        );
        if (!isEmpty(response.data)) {
          setLastMessage(response?.data);
        }
      } catch (error) {
        console.error("Error fetching last message:", error);
      }
    };

    fetchLastMessage();
  }, [chat.idChat]);

  useEffect(() => {
    if (!socket) {
      console.error("Socket not initialized");
      return;
    }

    socket.emit("subscribe", `${chat?.idChat}_notify`);
    socket.on("message_notify", newMessage);

    return () => {
      socket.off("message_notify", newMessage);
    };
  }, [chat.idChat]);

  return (
    <>
      {totalMessages > 0 && (
        <TouchableOpacity
          key={chat?.idChat}
          onPress={() =>
            navigation.navigate(
              isCustomer
                ? screens.tab.chats.chatScreen
                : screens.tab.chats.ChatScreenSupervisor,
              {
                chatId: chat.idChat,
                userName: chat.name,
              }
            )
          }
        >
          <View key={chat?.idChat} style={styles.chatItem}>
            {chat?.image ? (
              <View style={styles.chatItem__img}>
                <Image
                  alt="icon-profile"
                  style={stylesGlobal.imageMin__img}
                  resizeMode="contain"
                  source={assets.image.png.profile}
                />
              </View>
            ) : (
              <View style={styles.messageCircle}>
                <StyledText>
                  {chat?.name?.substring(0, 2).toUpperCase()}
                </StyledText>
              </View>
            )}
            <View style={styles.chatContent}>
            <View style={styles.chatTextContainer}>
              <StyledText bold>{chat.name}</StyledText>
              <StyledText font12pt lightGray regularGray>
                {lastMessage?.message || "No recent message"}
              </StyledText>
              <Text style={styles.chatItem__message}></Text>
            </View>
            <View style={styles.chatContainerTime}>
              {lastMessage && (
                <StyledText font14pt lightGray>
                  {lastMessage?.createdAtFormatted}
                </StyledText>
              )}
              {totalUnreadMessages > 0 && (
                <View style={styles.totalMessageContainer}>
                  <Text style={styles.totalMessage}>{totalUnreadMessages}</Text>
                </View>
              )}
            </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
