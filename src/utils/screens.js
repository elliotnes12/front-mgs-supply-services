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
  settingScreen: "SettingsScreen",
  tokenVerification: "EmailTokenVerificationScreen",
  detailService: "DetailService",
  updateService: "UpdateService",
  completeService: "CompleteService"
};

const workFlow = {
  root: "WorkFlowRoot",
}

const chatCustomer = {
  chatsScreenCustomer: "ChatsScreenCustomer",
  chatScreenCustomer: "ChatScreen",
}

const chats = {
  customer: chatCustomer,
  root: "ChatsRoot",
  createChatScreen: "CreateChatScreen",
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