const auth = {
  authStartScreen: "AuthStartScreen",
  loginScreen: "LoginScreen",
  registerScreen: "RegisterScreen",
};

const global = {
  dashboard: "DashboardScreen",
  createService: "CreateService",
  imageFullScreen: "ImageFullScreen",
  groupScreen: "GroupScreen",
  groupProfileScreen: "GroupProfileScreen",
  addUserGroupScreen: "AddUserGroupScreen",
  settingScreen: "SettingsScreen"
};

const workFlow = {
  root: "WorkFlowRoot",
}

const chats = {
  root: "ChatsRoot",
  createChatScreen: "CreateChatScreen",
  chatScreen: "ChatScreen",
  chatsScreenCustomer: "ChatsScreenCustomer",
  ChatScreenSupervisor: "ChatScreenSupervisor",
  chatsScreenEmployee: "ChatsScreenEmployee",
  chatContactsScreenEmployee: "ChatsContactsScreenEmployee"
};

const services = {
  root: "ServicesScreen"
}
const products = {
  root: "ProductScreenRoot",
  productScreen: "ProductScreen"
}
const pedings = {
  pendingSupervisorScreen: "PendingSupervisorScreen",
  groupsScreen: "GroupsScreen",
  pendingScreen: "PendingScreen",
  pendingScreenEmployee: "PendingScreenEmployee",
  workFlowAdmin: "WorkFlowAdminScreen",
  createGroupScreen: "CreateGroupScreen",
};

const reports = {
  root: "ReportsRoot"
}

export const screens = {
  auth,
  global,
  tab: {
    root: "BottomTabRoot",
    rootEmployee: "BottomTabEmployeeRoot",
    rootCustomer: "BottomTabCustomerRoot",
    rootSupervisor: "BottomTabSupervisorRoot",
    chats,
    pedings,
    products,
    reports,
    services,
    workFlow
  },
}