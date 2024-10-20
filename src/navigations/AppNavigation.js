import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CreateService, ImageFullScreen } from "../screens/Global";
import {
  AddUserGroupScreen,
  ChangeNameGroupScreen,
  GroupProfileScreen,
  GroupScreen,
} from "../screens/Groups";
import { initSockets, screens } from "../utils";
import { styles } from "./Styles.style";
import { BottomTabNavigation } from "./ButtonTabNavigation/BottomTabNavigation";
import { ChatScreenCustomer } from "../screens/Global/ChatScreenCustomer";
import { ChatScreenSupervisor } from "../screens/Global/ChatScreenSupervisor";
import { ServicesScreen } from "../screens/Global/ServicesScreen";
import { ChatContactsScreenEmployee } from "../screens/Global/ChatContactsScreenEmployee";
import { SettingsScreen } from "../modules/Settings";
import { EmailTokenVerificationScreen } from "../modules/Auth/screens/EmailTokenVerificationScreen";
import { DetailService } from "../screens/Global/DetailServices";
import { CompleteService } from "../screens/Global/CompleteServices";
import { UpdateService } from "../screens/Global/UpdateServices";

initSockets();

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
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
          name={screens.global.updateService}
          component={UpdateService}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.global.settingScreen}
          component={SettingsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.global.detailService}
          component={DetailService}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.global.completeService}
          component={CompleteService}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name={screens.tab.chats.chatContactsScreenEmployee}
          component={ChatContactsScreenEmployee}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.tab.chats.ChatScreenSupervisor}
          component={ChatScreenSupervisor}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.tab.chats.customer.chatScreenCustomer}
          component={ChatScreenCustomer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.tab.services.root}
          component={ServicesScreen}
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
          name={screens.global.imageFullScreen}
          component={ImageFullScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={screens.global.tokenVerification}
          component={EmailTokenVerificationScreen}
          options={{ headerShown: false }}
        />

      </Stack.Group>
    </Stack.Navigator>
  );
}
