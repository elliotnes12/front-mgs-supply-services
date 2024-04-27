import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsNavigation, GroupsNavigation, ChatNavigation, ReportsNavigation } from '../stacks';
import { screens } from '../../utils';
import { Icon, Image, Text, View } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../modules/Auth/hooks';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./BottomTabNavigation.styles";
import { DashboardScreen } from '../../modules/dashboard/screens/DashboardScreen';
import { assets } from '../../assets';

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  const { user } = useAuth();
  const { active } = user;
  const navigation = useNavigation();
  const [tabBarVisible, setTabBarVisible] = useState("flex");

  const baseTabs = [
    { name: screens.tab.chats.root, component: ChatNavigation, title: 'Chats', iconName: 'chat' },
    { name: screens.tab.groups.root, component: GroupsNavigation, title: 'Grupos', iconName: 'account-group' },
    { name: screens.tab.settings.root, component: SettingsNavigation, title: 'Setting', iconName: 'cog-outline' },
  ];

  const adminTabs = [
    { name: screens.tab.reports.root, component: ReportsNavigation, title: 'Reportes', iconName: 'file-document' }
  ];

  const tabsToShow = user.role.name === 'admin' ? [...baseTabs, ...adminTabs] : baseTabs;

  const handleSettingsPress = () => {
    setTabBarVisible("none");
    navigation.navigate(screens.tab.settings.root);
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: false,
        headerShown: route.name === screens.tab.settings.root,
        tabBarLabelStyle: { display: 'none' },
        tabBarStyle: styles.tabBar,
        tabBarButton: styles.tabBarButton,
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size, active),
        tabBarStyle: [{ display: tabBarVisible, }, styles.tabBar],
        headerStyle:[styles.headerGoback],
        headerLeft: () => (route.name === screens.tab.settings.root ? (
          <TouchableOpacity
            onPress={() => {
              setTabBarVisible("flex")
              navigation.goBack()
            }
            }>
            <View style={styles.goBack}>
              <Icon as={MaterialCommunityIcons} name="arrow-left" size={27} color="#000" />
            </View>
          </TouchableOpacity>
        ) : null),
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size, active),
        tabBarButton: (props) => {
          if (!active && route.name !== screens.tab.settings.root) {
            return <TouchableOpacity {...props} disabled />;
          }
          if (route.name === screens.tab.settings.root) {
            return <TouchableOpacity onPressIn={handleSettingsPress} {...props} />;
          }
          return <TouchableOpacity {...props} />;
        },
      })}
    >
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarItemStyle: [styles.tabBarItemHome],
          tabBarIcon: ({ color, size }) => (
            <View style={[styles.itemHome,{backgroundColor:!active? "": "#CEDC39", borderRadius:24}]}>
              <View style={{ width: 40, height: 30 }}>
                <Image
                  style={styles.img}
                  resizeMode='contain'
                  source={
                    assets.image.png.home
                  } alt="icon" />
              </View>
              <Text style={{ color: "rgba(34, 33, 40, 1)", marginLeft: 5 }}>Home</Text>
            </View>
          ),
        }}
      />

      {tabsToShow.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            title: tab.title,
            headerTitleAlign: "center",
            headerTintColor: "rgba(71, 71, 71, 1)",
            tabBarItemStyle: [styles.tabBarItemOptions,
              {backgroundColor:!active && tab.name === screens.tab.settings.root? "#fff" : 
              active? "#fff" : "transparent" }]
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function screenIcon(route, color, size, active) {
  let image;

  if (route.name === "DashboardScreen") {
    image = 'home';
  }
  if (route.name === screens.tab.chats.root) {
    image = assets.image.png.chat;
  }
  if (route.name === screens.tab.groups.root) {
    image = assets.image.png.calendar;
  }
  if (route.name === screens.tab.settings.root) {
    image = assets.image.png.setting;
  }
  if (route.name === screens.tab.reports.root) {
    image = 'file-document';
  }

  return (
    <Image
      style={styles.img}
      resizeMode='contain'
      source={
        image
      } alt="icon" />
  );
}
