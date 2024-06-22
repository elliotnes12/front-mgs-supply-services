import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GroupScreen,CreateGroupScreen } from "../../screens/Groups";
import { screens } from "../../utils";
import { styles } from "../Styles.style";

const Stack =  createNativeStackNavigator();



export function GroupsNavigation() {
  return (
    <Stack.Navigator screenOptions={
        {
          ...styles.stackNavigationStyles
        }
     }>

      <Stack.Screen
        name={screens.tab.groups.groupsScreen}
        component={GroupScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name={screens.tab.groups.createGroupScreen}
        component={CreateGroupScreen}
        options={{
          title:"Nuevo Grupo",
          presentation: "model",
          ...styles.modalStyles
        
        }}
      />
     

    </Stack.Navigator>
  )
}