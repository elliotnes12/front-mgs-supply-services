import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsNavigation, GroupsNavigation, ChatNavigation, ReportsNavigation } from "../stacks";
import { screens } from "../../utils";
import { styles } from "./BottomTabNavigation.styles";
import { Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../hooks';

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  const { user } = useAuth();

  const baseTabs = [
    { name: screens.tab.chats.root, component: ChatNavigation, title: "Chats", iconName: "chat" },
    { name: screens.tab.groups.root, component: GroupsNavigation, title: "Grupos", iconName: "account-group" },
    { name: screens.tab.settings.root, component: SettingsNavigation, title: "Ajustes", iconName: "cog-outline" }
  ];

  const adminTabs = [
    { name: screens.tab.reports.root, component: ReportsNavigation, title: "Reportes", iconName: "file-document" }
  ];

  const tabsToShow = user.role.name === 'admin' ? [...baseTabs, ...adminTabs] : baseTabs;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#cedc39",
        tabBarInactiveTintColor: "#ffffff",
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size),
      })}
    >
      {tabsToShow.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{ title: tab.title }}
        />
      ))}
    </Tab.Navigator>
  );
}


function screenIcon(route, color, size) {
  let iconName;

  if (route.name === screens.tab.chats.root) {
    iconName = "chat";
  }
  if (route.name === screens.tab.groups.root) {
    iconName = "account-group";
  }
  if (route.name === screens.tab.settings.root) {
    iconName = "cog-outline";
  }
  if (route.name === screens.tab.reports.root) {
    iconName = "file-document";
  }

  return (
    <Icon
      as={MaterialCommunityIcons}
      name={iconName}
      color={color}
      size={size}
    />
  );
}