import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from "../../utils";
import { styles } from "../Styles.style";
import { PendingScreenEmployee } from '../../screens/Pendings/PendingScreenEmployee';

const Stack = createNativeStackNavigator();



export function PendingEmployeeNavigation() {
  return (
    <Stack.Navigator screenOptions={
      {
        ...styles.stackNavigationStyles
      }
    }>

      <Stack.Screen
        name={screens.tab.groups.pendingScreenEmployee}
        component={PendingScreenEmployee}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}