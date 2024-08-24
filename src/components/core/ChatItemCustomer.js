import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { stylesGlobal } from "../../modules/styles/global.style";
import { styles } from "./styles/ChatItemCustomer.styles";
import { isEmpty } from "lodash";
import { ENV, screens, socket } from "../../utils";
import { Chat } from "../../modules/chat/api/Chat";
import { useAuth } from "../../modules/Auth/hooks";
import { ChatMessage } from "../../modules/chat/api/chatMessage";
import { UnreadMessages } from "../../modules/chat/api/unreadMessages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';
import { getIconById } from "../../utils/util";


export function ChatItemCustomer({ chat, isCustomer, upTopChat }) {
    const navigation = useNavigation();
    const [lastMessage, setLastMessage] = useState();
    const { user, accessToken } = useAuth();
    const [totalUnreadMessages, setTotalUnreadMessages] = useState(0);
    const isFocused = useIsFocused();
    const [totalMessages, setTotalMessages] = useState(0)


    const chatController = new Chat();
    const chatControllerMessage = new ChatMessage();
    const unreadMessagesController = new UnreadMessages();

    const newMessage = async (message) => {

        if (message.chat == chat?.idChat) {
            if (user._id !== message.user._id) {
                upTopChat(message.chat);
                setLastMessage(message);

                const activeChatId = await AsyncStorage.getItem(ENV.ACTIVE_CHAT_ID);

                if (activeChatId !== message.chat) {
                    setTotalUnreadMessages((prevState) => prevState + 1);
                }
            }
        }
    };


    useEffect(() => {
        if (isFocused) {

            (async () => {
                try {
                    const totalMessages = await chatControllerMessage.getTotal(
                        accessToken,
                        chat.idChat
                    );

                    setTotalMessages(totalMessages.data.total)

                    const totalReadMessages =
                        await unreadMessagesController.getTotalReadMessages(chat.idChat);

                    setTotalUnreadMessages(totalMessages.data.total - totalReadMessages);
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
            {totalMessages > 0 &&
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

                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                backgroundColor: "#CEDC39",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <View style={{ width: 35, height: 35 }}>
                                {getIconById("iconAvatar")}
                            </View>
                        </View>

                        <View style={styles.chatTextContainer}>
                            <Text style={styles.chatItem__name}>{chat.name}</Text>
                            <Text style={styles.chatItem__message}>
                                {lastMessage?.message? lastMessage.message : chat.message}
                            </Text>
                        </View>
                        <View style={styles.chatContainerTime}>
                            {lastMessage && (
                                <Text style={styles.chatTime}>
                                    {lastMessage?.createdAtFormatted ? lastMessage.createdAtFormatted : chat?.createdAtFormatted}
                                </Text>
                            )}

                        </View>
                    </View>
                </TouchableOpacity>
            }
        </>
    );
}
