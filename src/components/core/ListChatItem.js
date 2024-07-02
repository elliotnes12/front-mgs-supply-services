import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../modules/styles/global.style';
import { styles } from "./styles/ListChatItem.styles";
import { isEmpty } from "lodash";
import { screens } from '../../utils';
import { Chat } from '../../modules/chat/api/Chat';
import { DateTime } from 'luxon';


export function ListChatItem({ chat, isCustomer, token }) {
    const navigation = useNavigation();
    const [lastMessage, setLastMessage] = useState();

    const chatController = new Chat();


    useEffect(() => {
        const fetchLastMessage = async () => {
            try {
                const response = await chatController.getLastMessage(token, chat?.idChat);
                if(!isEmpty(response.data)){
                    setLastMessage(response?.data);
                }
                
            } catch (error) {
                console.error("Error fetching last message:", error);
            }
        };

        fetchLastMessage();
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
        <View style={styles.chatItem}>
            {chat?.image ? (
                <View style={styles.chatItem__img}>
                    <Image style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.profile} />
                </View>
            ) : (
                <View
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: "#CEDC39",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "#000", fontSize: 18 }}>{chat?.name?.substring(0, 2).toUpperCase()}</Text>
                </View>
            )}
            <View style={styles.chatTextContainer}>
                <Text style={styles.chatItem__name}>{chat.name}</Text>
                <Text style={styles.chatItem__message}>{lastMessage?.message || "No recent message"}</Text>
            </View>
            <View style={styles.chatInfo}>
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
