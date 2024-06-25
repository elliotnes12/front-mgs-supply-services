import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ChatsScreen } from "../../modules/chat/screens/ChatsScreen";
import { CreateChatsScreen } from "../../modules/chat/screens/CreateChatsScreen";
import { screens } from "../../utils";
import { styles } from "../Styles.style";
import { ChatScreen } from '../../modules/chat/screens/ChatScreen';

const Stack = createNativeStackNavigator();



export function ChatNavigation() {
  return (
    <Stack.Navigator screenOptions={
      {
        ...styles.stackNavigationStyles
      }
    }>

      <Stack.Screen
        name={screens.tab.chats.chatsScreen}
        component={ChatsScreen}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name={screens.tab.chats.chatScreen}
        component={ChatScreen}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  )
}