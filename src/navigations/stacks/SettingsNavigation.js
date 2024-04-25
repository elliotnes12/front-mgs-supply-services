import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SettingsScreen, ChangeFirstNameScreen, ChangeLastnameScreen } from "../../modules/Settings";
import { screens } from "../../utils";
import { styles } from "../Styles.style";

const Stack =  createNativeStackNavigator();



export function SettingsNavigation() {
  return (
    <Stack.Navigator screenOptions={
        {
          ...styles.stackNavigationStyles
        }
     }>

      <Stack.Screen
        name={screens.tab.settings.settingScreen}
        component={SettingsScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name={screens.tab.settings.changeFirstnameScreen}
        component={ChangeFirstNameScreen}
        options={{
          title:"Cambiar nombre",
          presentation: "model",
          ...styles.modalStyles
        
        }}
      />

      <Stack.Screen
        name={screens.tab.settings.changeLastnameScreen}
        component={ChangeLastnameScreen}
        options={{
          title:"Cambiar apellido",
          presentation: "model",
          ...styles.modalStyles
        
        }}
      />
     

    </Stack.Navigator>
  )
}