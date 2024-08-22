import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from "../../utils";
import { styles } from "../Styles.style";
import { PendingScreen } from '../../screens/Pendings/PendingScreen';

const Stack = createNativeStackNavigator();



export function PendingSupervisorNavigation() {
  return (
    <Stack.Navigator screenOptions={
      {
        ...styles.stackNavigationStyles
      }
    }>

      <Stack.Screen
        name={screens.tab.pedings.pendingSupervisorScreen}
        component={PendingScreen}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  )
}