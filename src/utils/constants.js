const IP = "192.168.100.44";
const SERVER = `${IP}:3977`;

export const ENV = {
  SERVER_IP: SERVER,
  BASE_PATH: `http://${SERVER}`,
  API_URL: `http://${SERVER}/api`,
  SOCKET_URL: `http://${SERVER}`,
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/register",
      LOGIN: "auth/login",
      REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    },
    ME: "user/me",
    USER: "users",
    USER_SUPPORT: "users-support",
    EMPLOYEES: "employees-by-users",
    USER_EXCEPT_PARTICIPANTS_GROUP: "users_exept_participants_group",
    CHAT: "chat",
    CHAT_MESSAGE: "chat/message",
    CHAT_MESSAGE_IMAGE: "chat/message/image",
    CHAT_MESSAGE_LAST: "chat/message/last",
    CHAT_MESSAGE_TOTAL: "chat/message/total",
    GROUP: "group",
    GROUP_EXIT: "group/exit",
    GROUP_BAN: "group/ban",
    GROUP_ADD_PARTICIPANTS: "group/add_participants",
    GROUP_MESSAGE: "group/message",
    GROUP_MESSAGE_IMAGE: "group/message/image",
    GROUP_MESSAGE_TOTAL: "group/message/total",
    GROUP_MESSAGE_LAST: "group/message/last",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
  TYPES_USERS: {
    CUSTOMER: "customer",
    COMPANY: "company",
    EMPLOYEE: "employee",
    MANAGER: "manager",
  },
  ACTIVE_CHAT_ID: "active_chat_id",
  ACTIVE_GROUP_ID: "active_group_id",
};

export const tabIds = {
  TAB_ID_SERVICES: "services",
  TAB_ID_PRODUCTS: "orders",
  TAB_ID_RAITING: "raiting",
};

export const headers = {
  HEADER_CONTACT: "headerContact",
};
