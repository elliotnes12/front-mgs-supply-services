const auth = {
  authStartScreen: "AuthStartScreen",
  loginScreen: "LoginScreen",
  registerScreen: "RegisterScreen",
};

const global = {
  dashboard: "DashboardScreen",
  createService: "CreateService",
  cameraScreen: "CameraScreen",
  imageFullScreen: "ImageFullScreen",
  chatScreen: "ChatScreen",
  groupScreen: "GroupScreen",
  groupProfileScreen: "GroupProfileScreen",
  addUserGroupScreen: "AddUserGroupScreen",
  changeNameGroupScreen: "ChangeNameGroupScreen",
};


const workFlow = {
  root:"WorkFlowRoot",

}

const chats = {
  root: "ChatsRoot",
  chatsScreen: "ChatsScreen",
  createChatScreen: "CreateChatScreen",
  chatScreen: "ChatScreen",
  ChatScreenSupervisor: "ChatScreenSupervisor",
  chatsScreenEmployee: "ChatsScreenEmployee",
  chatContactsScreenEmployee: "ChatsContactsScreenEmployee"
};

const services = {
  root: "ServicesScreen"
}
const products = {
  root: "ProductScreen",
  productScreen: "ProductScreen"
}
const groups = {
  root: "GroupsRoot",
  groupsScreen: "GroupsScreen",
  pendingScreen: "PendingScreen",
  pendingScreenEmployee: "PendingScreenEmployee",
  createGroupScreen: "CreateGroupScreen",
};

const reports = {
  root: "ReportsRoot"
}

const settings = {
  root: "SettingsRoot",
  settingScreen: "SettingsScreen"
};

export const screens = {
  auth,
  global,
  tab: {
    root: "BottomTabRoot",
    rootEmployee: "BottomTabRoot",
    rootCustomer: "BottomTabRoot",
    rootSupervisor: "BottomTabRoot",
    chats,
    groups,
    products,
    settings,
    reports,
    services,
    workFlow
  },
}