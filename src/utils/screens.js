const auth = {
  authStartScreen: "AuthStartScreen",
  loginScreen: "LoginScreen",
  registerScreen: "RegisterScreen",
};

const global = {
  userProfileScreen: "UserProfileScreen",
  cameraScreen: "CameraScreen",
  imageFullScreen: "ImageFullScreen",
  chatScreen: "ChatScreen",
  groupScreen: "GroupScreen",
  groupProfileScreen: "GroupProfileScreen",
  addUserGroupScreen: "AddUserGroupScreen",
  changeNameGroupScreen: "ChangeNameGroupScreen",
};

const chats = {
  root: "ChatsRoot",
  chatsScreen: "ChatsScreen",
  createChatScreen: "CreateChatScreen",
};

const groups = {
  root: "GroupsRoot",
  groupsScreen: "GroupsScreen",
  createGroupScreen: "CreateGroupScreen",
};

const reports ={
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
    chats,
    groups,
    settings,
    reports
  },
}