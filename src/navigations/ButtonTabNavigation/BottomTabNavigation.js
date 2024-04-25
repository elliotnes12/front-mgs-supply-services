import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsNavigation, GroupsNavigation, ChatNavigation, ReportsNavigation } from '../stacks';
import { screens } from '../../utils';
import { Icon, View } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../modules/Auth/hooks';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./BottomTabNavigation.styles";


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
        headerShown: route.name === screens.tab.settings.root, // Mostrar header solo en la pantalla de ajustes
        tabBarStyle: {
          height:50,
          display:tabBarVisible,
          flex:0
        },

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
          if(route.name === screens.tab.settings.root){
            return <TouchableOpacity onPressIn={handleSettingsPress} {...props} />;
          }
          
          return <TouchableOpacity {...props} />;
        },
      })}
     
    >
      {tabsToShow.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            title: tab.title,
            headerTitleAlign: "center",
            headerTintColor: "rgba(71, 71, 71, 1)"
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function screenIcon(route, color, size, active) {
  let iconName;

  if (route.name === screens.tab.chats.root) {
    iconName = 'chat';
  }
  if (route.name === screens.tab.groups.root) {
    iconName = 'account-group';
  }
  if (route.name === screens.tab.settings.root) {
    iconName = 'cog-outline';
  }
  if (route.name === screens.tab.reports.root) {
    iconName = 'file-document';
  }

  return (
    <Icon
      as={MaterialCommunityIcons}
      name={iconName}
      color={active ? "#000" : "#000"}
      size={size}
    />
  );
}
