import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { assets } from '../../assets';
import { useAuth } from '../../modules/Auth/hooks';
import { DashboardScreen } from '../../modules/dashboard/screens/DashboardScreen';
import { screens } from '../../utils';
import { ChatNavigation, ChatNavigationEmployee, GroupsNavigation, ProductNavigation, ReportsNavigation, SettingsNavigation } from '../stacks';
import { PendingEmployeeNavigation } from '../stacks/PendingEmployeeNavigation';
import { WorkFlowNavigation } from '../stacks/WorkFlowNavigation';
import { styles } from "./BottomTabNavigation.styles";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  const { isCustomer, userInfo } = useAuth();
  const navigation = useNavigation();
  const [tabBarVisible, setTabBarVisible] = useState("flex");

  let baseTabs = undefined;

  if (isCustomer) {
    baseTabs = [
      { name: screens.tab.rootCustomer, title: 'Home', iconName: 'home' },
      { name: screens.tab.chats.root, title: 'Chats', iconName: 'chat' },
      { name: screens.tab.products.root, title: 'Products', iconName: 'order' },
      { name: screens.tab.settings.root, title: 'Setting', iconName: 'cog-outline' },
    ];
  } else {
    if (userInfo?.type == "supervisor") {
      baseTabs = [
        { name: screens.tab.rootSupervisor, title: 'Home', iconName: 'home' },
        { name: screens.tab.chats.chatsScreenEmployee, title: 'Chats', iconName: 'chat' },
        { name: 'boton-central', title: '', iconName: 'plus' },
        { name: screens.tab.groups.root, title: 'Pending', iconName: 'pending' },
        { name: screens.tab.settings.root, title: 'Setting', iconName: 'cog-outline' },
      ];
    } else if (userInfo?.type == "employee") {
      baseTabs = [
        { name: screens.tab.rootEmployee, title: 'Home', iconName: 'home' },
        { name: screens.tab.chats.chatsScreenEmployee, title: 'Chats', iconName: 'chat' },
        { name: 'boton-central', title: '', iconName: 'plus' },
        { name: screens.tab.groups.pendingScreenEmployee, title: 'Pending', iconName: 'pending' },
        { name: screens.tab.settings.root, title: 'Setting', iconName: 'cog-outline' },
      ];
    }
    else if (userInfo?.type == "manager") {
      baseTabs = [
        { name: screens.tab.rootEmployee, title: 'Home', iconName: 'home' },
        { name: screens.tab.chats.chatsScreenEmployee, title: 'Chats', iconName: 'chat' },
        { name: 'boton-central', title: '', iconName: 'plus' },
        { name: screens.tab.workFlow.root, title: 'Workflow', iconName: 'pending' },
        { name: screens.tab.reports.root, title: 'Reports', iconName: 'reports' },
      ];
    }


  }


  const tabsToShow = [...baseTabs];


  const CentralComponent = () => {
    return (
      <></>
    );
  }

  const handleSettingsPress = () => {
    setTabBarVisible("none");
    navigation.navigate(screens.tab.settings.root);
  };


  const getComponentByName = (name) => {
    switch (name) {
      case screens.tab.rootSupervisor:
        return DashboardScreen;
      case screens.tab.rootEmployee:
        return DashboardScreen;
      case screens.tab.rootCustomer:
        return DashboardScreen;
      case screens.tab.chats.root:
        return ChatNavigation;
      case screens.tab.groups.root:
        return GroupsNavigation;
      case screens.tab.settings.root:
        return SettingsNavigation;
      case screens.tab.reports.root:
        return ReportsNavigation;
      case screens.tab.products.root:
        return ProductNavigation;
      case screens.tab.groups.pendingScreenEmployee:
        return PendingEmployeeNavigation;
      case screens.tab.chats.chatsScreenEmployee:
        return ChatNavigationEmployee;
      case screens.tab.workFlow.root:
        return WorkFlowNavigation;
      default:
        return null;
    }
  };

  const getIconByName = (name) => {
    switch (name) {
      case 'home':
        return assets.image.png.home;
      case 'home-focus':
        return assets.image.png.homeFocus;
      case 'chat-focus':
        return assets.image.png.chatFocus;
      case 'chat':
        return assets.image.png.chat;
      case 'order-focus':
        return assets.image.png.orderFocus;
      case 'order':
        return assets.image.png.order;
      case 'cog-outline':
        return assets.image.png.setting;
      case 'plus':
        return assets.image.png.plus;
      case 'pending':
        return assets.image.png.iconPending;
      case 'pending-focus':
        return assets.image.png.iconPendingFocus;
      case 'reports':
        return assets.image.png.iconReports;
      case 'reports-focus':
        return assets.image.png.iconReportsFocus;
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: false,
        headerShown: route.name === screens.tab.settings.root,
        tabBarLabelStyle: { display: 'none' },
        tabBarActiveTintColor: 'green',
        tabBarStyle: [{ display: tabBarVisible }, styles.tabBar],
        headerStyle: [styles.headerGoback],
        headerLeft: () => (route.name === screens.tab.settings.root ? (
          <TouchableOpacity
            onPress={() => {
              setTabBarVisible("flex");
              navigation.goBack();
            }}
          >
            <View style={styles.goBack}>
            </View>
          </TouchableOpacity>
        ) : null),
        tabBarButton: (props) => {
          if (route.name === 'boton-central') {
            return <TouchableOpacity {...props} disabled />;
          }
          if (route.name === screens.tab.settings.root) {
            return <TouchableOpacity onPress={handleSettingsPress} {...props} />;
          }
          else if (route.name === screens.tab.chats.chatScreen) {
            return <TouchableOpacity onPress={handleSettingsPress} {...props} />;
          }

          return <TouchableOpacity {...props} />;
        },
      })}
    >
      {tabsToShow.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.name !== "boton-central" ? getComponentByName(tab.name) : CentralComponent}
          options={{
            title: tab.title,
            headerTitleAlign: "center",
            headerTintColor: "rgba(71, 71, 71, 1)",
            tabBarItemStyle: [styles.tabBarItemOptions],
            tabBarIcon: ({ focused }) => {

              const isSupervisor = !isCustomer && userInfo.type == 'supervisor' || !isCustomer && userInfo.type == 'manager' ? screens.global.createService : '';

              if (tab.name === 'boton-central') {
                return (
                  <View>
                    <Image
                      style={styles.border}
                      resizeMode='contain'
                      source={assets.image.png.union}
                      alt="icon"
                    />
                    <TouchableOpacity onPress={() => navigation.navigate(isSupervisor)} style={styles.centralButton}>
                      <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.registerOrder}>
                        <Image
                          style={styles.img}
                          resizeMode='contain'
                          source={getIconByName("plus")}
                          alt="icon"
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return (
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.img}
                      resizeMode='contain'
                      source={getIconByName(focused ? tab.iconName + "-focus" : tab.iconName)}
                      alt="icon"
                    />
                    <Text style={[styles.tabText, { color: focused ? '#7DA74D' : '#ABABAB' }]}>{tab.title}</Text>
                  </View>
                );
              }
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
