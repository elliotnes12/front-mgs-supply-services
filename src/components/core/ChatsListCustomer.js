import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../modules/styles/global.style';
import { styles } from "./styles/ChatItemCustomer.styles";
import { isEmpty } from "lodash";
import { screens, socket } from '../../utils';
import { Chat } from '../../modules/chat/api/Chat';
import { useAuth } from '../../modules/Auth/hooks';

export function ChatItem({ chat, isCustomer, token, upTopChat }) {
    const navigation = useNavigation();
    const [lastMessage, setLastMessage] = useState();
    const { user } = useAuth();

    const chatController = new Chat();

    const newMessage = (message) => {

        if(message.chat == chat?.idChat){

        if(user._id !== message.user._id){
            upTopChat(message.chat);
            setLastMessage(message);
            
        }
        
        }
    }

    useEffect(() => {
        const fetchLastMessage = async () => {
            try {
                const response = await chatController.getLastMessage(token, chat?.idChat);
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


        console.log("Subscribing to channel:", `${chat?.idChat}_notify`);
        
        socket.emit("subscribe", `${chat?.idChat}_notify`);
        socket.on("message_notify", newMessage);

        return () => {
            console.log("Unsubscribing from channel:", `${chat?.idChat}_notify`);
            socket.off("message_notify", newMessage);
        };
    }, [chat.idChat]);

    return (
        <TouchableOpacity 
            key={chat?.idChat}
            onPress={() =>
                navigation.navigate(isCustomer ? screens.tab.chats.chatScreen : screens.tab.chats.chatScreenCustomer, {
                    userId: chat.idChat,
                    userName: chat.name,
                })
            }
        >
            <View key={chat?.idChat} style={styles.chatItem}>
                {chat?.image ? (
                    <View style={styles.chatItem__img}>
                        <Image alt="icon-profile" style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.profile} />
                    </View>
                ) : (
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
                        <Text style={{ color: "#000", fontSize: 16 }}>{chat?.name?.substring(0, 2).toUpperCase()}</Text>
                    </View>
                )}
                <View style={styles.chatTextContainer}>
                    <Text style={styles.chatItem__name}>{chat.name}</Text>
                    <Text style={styles.chatItem__message}>{lastMessage?.message || "No recent message"}</Text>
                </View>
                <View style={styles.chatContainerTime}>
                    {lastMessage && 
                     <Text style={styles.chatTime}>
                       {lastMessage?.createdAtFormatted}
                     </Text>
                     }
                    <View style={styles.totalMessageContainer}>
                        <Text style={styles.totalMessage}>2</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
