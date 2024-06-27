import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from "../../utils";
import { styles } from "../Styles.style";
import { ChatsScreenEmployee } from '../../modules/chat/screens/ChatsScreenEmployee';
const Stack = createNativeStackNavigator();



export function ChatNavigationEmployee() {
  return (
    <Stack.Navigator screenOptions={
      {
        ...styles.stackNavigationStyles
      }
    }>

      <Stack.Screen
        name={screens.tab.chats.chatsScreenEmployee}
        component={ChatsScreenEmployee}
        options={{ headerShown: false }}
      />


    


    </Stack.Navigator>
  )
}