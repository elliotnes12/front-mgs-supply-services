import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { assets } from '../../assets';
import { useAuth } from '../../modules/Auth/hooks';
import { DashboardScreen } from '../../modules/dashboard/screens/DashboardScreen';
import { ENV, screens } from '../../utils';
import {
  ChatNavigation,
  ChatNavigationEmployee,
  PendingSupervisorNavigation,
  ProductNavigation,
  ReportsNavigation,
  SettingsNavigation,
  PendingEmployeeNavigation
} from '../stacks';
import { WorkFlowNavigation } from '../stacks/WorkFlowNavigation';
import { styles } from './BottomTabNavigation.styles';

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  const { isCustomer, userInfo } = useAuth();
  const navigation = useNavigation();
  const [tabBarVisible, setTabBarVisible] = useState("flex");

  const userType = userInfo?.type;

  const baseTabs = isCustomer
    ? [
      { name: screens.tab.rootCustomer, title: 'Home', iconName: 'home' },
      { name: screens.tab.chats.root, title: 'Chats', iconName: 'chat' },
      { name: screens.tab.products.root, title: 'Products', iconName: 'order' },
      { name: screens.global.settingScreen, title: 'Setting', iconName: 'cog-outline' },
    ]
    : userType === ENV.TYPES_USERS.SUPERVISOR
      ? [
        { name: screens.tab.rootSupervisor, title: 'Home', iconName: 'home' },
        { name: screens.tab.chats.chatsScreenEmployee, title: 'Chats', iconName: 'chat' },
        { name: 'boton-central', title: '', iconName: 'plus' },
        { name: screens.tab.pedings.pendingSupervisorScreen, title: 'Pending', iconName: 'pending' },
        { name: screens.global.settingScreen, title: 'Setting', iconName: 'cog-outline' },
      ]
      : userType === ENV.TYPES_USERS.EMPLOYEE
        ? [
        { name: screens.tab.rootEmployee, title: 'Home', iconName: 'home' },
        { name: screens.tab.chats.chatsScreenEmployee, title: 'Chats', iconName: 'chat' },
        { name: 'boton-central', title: '', iconName: 'plus' },
          { name: screens.tab.pedings.pendingScreenEmployee, title: 'Pending', iconName: 'pending' },
          { name: screens.global.settingScreen, title: 'Setting', iconName: 'cog-outline' },
        ]
        : userType === ENV.TYPES_USERS.MANAGER
          ? [
        { name: screens.tab.rootEmployee, title: 'Home', iconName: 'home' },
        { name: screens.tab.chats.chatsScreenEmployee, title: 'Chats', iconName: 'chat' },
        { name: 'boton-central', title: '', iconName: 'plus' },
        { name: screens.tab.workFlow.root, title: 'Workflow', iconName: 'pending' },
        { name: screens.tab.reports.root, title: 'Reports', iconName: 'reports' },
          ]
          : [];

  const getComponentByName = (name) => {
    const components = {
      [screens.tab.rootSupervisor]: DashboardScreen,
      [screens.tab.rootEmployee]: DashboardScreen,
      [screens.tab.rootCustomer]: DashboardScreen,
      [screens.tab.chats.root]: ChatNavigation,
      [screens.tab.pedings.pendingSupervisorScreen]: PendingSupervisorNavigation,
      [screens.global.settingScreen]: SettingsNavigation,
      [screens.tab.reports.root]: ReportsNavigation,
      [screens.tab.products.root]: ProductNavigation,
      [screens.tab.pedings.pendingScreenEmployee]: PendingEmployeeNavigation,
      [screens.tab.chats.chatsScreenEmployee]: ChatNavigationEmployee,
      [screens.tab.workFlow.root]: WorkFlowNavigation,
    };
    return components[name] || null;
  };

  const getIconByName = (name, focused) => {
    const iconMap = {
      'home': assets.image.png.home,
      'home-focus': assets.image.png.homeFocus,
      'chat': assets.image.png.chat,
      'chat-focus': assets.image.png.chatFocus,
      'order': assets.image.png.order,
      'order-focus': assets.image.png.orderFocus,
      'cog-outline': assets.image.png.setting,
      'plus': assets.image.png.plus,
      'pending': assets.image.png.iconPending,
      'pending-focus': assets.image.png.iconPendingFocus,
      'reports': assets.image.png.iconReports,
      'reports-focus': assets.image.png.iconReportsFocus,
    };
    return iconMap[focused ? `${name}-focus` : name];
  };

  const handleSettingsPress = () => {
    setTabBarVisible("none");
    navigation.navigate(screens.global.settingScreen);
  };

  const CentralComponent = () => <></>;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: false,
        headerShown: route.name === screens.global.settingScreen,
        tabBarLabelStyle: { display: 'none' },
        tabBarActiveTintColor: 'green',
        tabBarStyle: [{ display: tabBarVisible }, styles.tabBar],
        headerStyle: [styles.headerGoback],
        headerLeft: () =>
          route.name === screens.global.settingScreen ? (
            <TouchableOpacity
              onPress={() => {
                setTabBarVisible("flex");
                navigation.goBack();
              }}
            >
              <View style={styles.goBack} />
            </TouchableOpacity>
          ) : null,
        tabBarButton: (props) => {
          if (route.name === 'boton-central') {
            return <TouchableOpacity {...props} disabled />;
          }
          if (route.name === screens.global.settingScreen || route.name === screens.tab.chats.chatScreen) {
            return <TouchableOpacity onPress={handleSettingsPress} {...props} />;
          }
          return <TouchableOpacity {...props} />;
        },
      })}
    >
      {baseTabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.name !== "boton-central" ? getComponentByName(tab.name) : CentralComponent}
          options={{
            title: tab.title,
            headerTitleAlign: "center",
            headerTintColor: "rgba(71, 71, 71, 1)",
            tabBarItemStyle: [styles.tabBarItemOptions],
            tabBarIcon: ({ focused }) => (
              tab.name === 'boton-central' ? (
                <View>
                  <Image
                    style={styles.border}
                    resizeMode="contain"
                    source={assets.image.png.union}
                    alt="icon"
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate(userType === 'supervisor' || userType === 'manager' ? screens.global.createService : '')}
                    style={styles.centralButton}
                  >
                    <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.registerOrder}>
                      <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={getIconByName("plus")}
                        alt="icon"
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.img}
                      resizeMode="contain"
                      source={getIconByName(tab.iconName, focused)}
                      alt="icon"
                    />
                    <Text style={[styles.tabText, { color: focused ? '#7DA74D' : '#ABABAB' }]}>{tab.title}</Text>
                  </View>
              )
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
