import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ChatsScreen } from "../../modules/chat/screens/ChatsScreen";
import { screens } from "../../utils";
import { styles } from "../Styles.style";
const Stack = createNativeStackNavigator();



export function ChatNavigation() {
  return (
    <Stack.Navigator screenOptions={
      {
        ...styles.stackNavigationStyles
      }
    }>

      <Stack.Screen
        name={screens.tab.chats.chatsScreenCustomer}
        component={ChatsScreen}
        options={{ headerShown: false }}
      />


    


    </Stack.Navigator>
  )
}