import { Platform } from "react-native";

const IP = "192.168.56.1";
const SERVER = `server-mgs-supply-services-1.onrender.com`;

export const ENV = {
  SERVER_IP: SERVER,
  BASE_PATH: `https://${SERVER}`,
  API_URL: `https://${SERVER}/api`,
  SOCKET_URL: `https://${SERVER}`,
  DISPOSITIVO: {
    isIphone: Platform.OS === 'ios' ? true : false
  },
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/register",
      LOGIN: "auth/login",
      REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    },
    ME: "user/me",
    USER: "users",
    EMPLOYEE: "employees?page={page}&limit={limit}",
    USER_SUPPORT: "users-support",
    EMPLOYEE_BY_USER: "employees-by-users",
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
    GET_ALL_SERVICES_SUPERVISOR: "services/orders/supervisor",
    GET_ALL_SERVICES: "services/orders/supervisor"
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
  REGISTER_TABS: {
    COMPANY: "company"
  },
  TYPES_USERS: {
    CUSTOMER: "customer",
    EMPLOYEE: "employee",
    MANAGER: "manager",
    SUPERVISOR: "supervisor"
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

