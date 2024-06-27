import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  CreateService,
  ImageFullScreen,
} from "../screens/Global";
import {
  AddUserGroupScreen,
  ChangeNameGroupScreen,
  GroupProfileScreen,
  GroupScreen,
} from "../screens/Groups";
import { initSockets, screens } from '../utils';
import { styles } from "./Styles.style";
import { useTabBar } from './TabBarProvider'; // Importar el contexto
import { BottomTabNavigation } from './ButtonTabNavigation/BottomTabNavigation';
import { useNavigation } from '@react-navigation/native';
import { ChatScreen } from '../screens/Global/ChatScreen';
import { ChatScreenSupervisor } from '../screens/Global/ChatScreenSupervisor';
initSockets();

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  const { setIsTabBarVisible } = useTabBar(); // Obtener el estado del contexto
  const navigation = useNavigation(); // Usar useNavigation para obtener el objeto navigation


  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const state = e.data.state;
      const currentRoute = state.routes[state.index].name;

      // Si la ruta actual es ChatScreen, ocultar la barra de navegación
      if (currentRoute === screens.global.chatScreen) {
        setIsTabBarVisible(false);
      } else {
        setIsTabBarVisible(true);
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator >
      <Stack.Screen
        name={screens.tab.root}
        options={{ headerShown: false, ...styles.stackNavigationStyles }}
        component={BottomTabNavigation}
      />


      <Stack.Screen
        name={screens.global.groupScreen}
        component={GroupScreen}
        options={{ headerShown: false, ...styles.stackNavigationStyles }}
      />

      <Stack.Group
        screenOptions={{ presentation: "modal", ...styles.modalStyles }}
      >

        <Stack.Screen
          name={screens.tab.chats.chatScreenCustomer}
          component={ChatScreenSupervisor}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.tab.chats.chatScreen}
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.createService}
          component={CreateService}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.groupProfileScreen}
          component={GroupProfileScreen}
          options={{ title: "Info. del grupo" }}
        />
        <Stack.Screen
          name={screens.global.addUserGroupScreen}
          component={AddUserGroupScreen}
          options={{ title: "Añadir participante" }}
        />
        <Stack.Screen
          name={screens.global.changeNameGroupScreen}
          component={ChangeNameGroupScreen}
          options={{ title: "Cambiar nombre del grupo" }}
        />
        <Stack.Screen
          name={screens.global.imageFullScreen}
          component={ImageFullScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
