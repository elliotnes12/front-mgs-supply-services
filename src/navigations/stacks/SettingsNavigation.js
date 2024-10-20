import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SettingsScreen} from "../../modules/Settings";
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
        name={screens.global.settingScreen + "Nav"}
        component={SettingsScreen}
        options={{headerShown:false}}
      />

     

    </Stack.Navigator>
  )
}