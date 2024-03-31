import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {  ChatsScreen, CreateChatsScreen } from "../../screens/Chats";
import { screens } from "../../utils";
import { styles } from "../Styles.style";

const Stack =  createNativeStackNavigator();



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
        options={{title:"Chats"}}
      />

      <Stack.Screen
        name={screens.tab.chats.createChatScreen}
        component={CreateChatsScreen}
        options={{
          title:"Nuevo chat",
          presentation: "model",
          ...styles.modalStyles
        
        }}
      />
     

    </Stack.Navigator>
  )
}