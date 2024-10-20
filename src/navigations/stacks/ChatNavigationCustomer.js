import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ChatsScreenCustomer } from "../../modules/chat/screens/customer/ChatsScreenCustomer";
import { screens } from "../../utils";
import { styles } from "../Styles.style";
const Stack = createNativeStackNavigator();



export function ChatNavigationCustomer() {
  return (
    <Stack.Navigator screenOptions={
      {
        ...styles.stackNavigationStyles
      }
    }>
      <Stack.Screen
        name={screens.tab.chats.customer.chatsScreenCustomer + "Nav"}
        component={ChatsScreenCustomer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}