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
      VALIDATE_CODE: "auth/validate_code",
      GENERATE_CODE: "auth/generate_code"
    },
    ME: "user/me",
    USER: "users",
    EMPLOYEE: "employees/type?page={page}&limit={limit}",
    EMPLOYEE_BY_ID: "/employee-by-id",
    EMPLOYEE_BY_NAME: "employees-by-name?page={page}&limit={limit}",
    CUSTOMER: "customer?page={page}&limit={limit}",
    CUSTOMER_BY_NAME: "customer/find-by-name?page={page}&limit={limit}",
    CUSTOMER_BY_EMAIL: "customer/find-by-email",
    CREATE_ORDER: "service-order",
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
    GET_ALL_SERVICES_CUSTOMER: "services/orders/customer",
    GET_ALL_SERVICES_EMPLOYEE: "services/orders/employee",
    GET_ALL_SERVICES_BY_MANAGER: "services/orders/manager?page={page}&limit={limit}",
    GET_ALL_SERVICES_BY_WORKFLOW: "services/orders/workflow",
    GET_ALL_SERVICES_IN_PROGRESS_SUPERVISOR: "services/orders/in-progress/supervisor",
    GET_ALL_SERVICES_IN_PROGRESS_EMPLOYEE: "services/orders/in-progress/employee",
    GET_SERVICE_CUSTOMER_BY_TICKET: "services/orders/customer",
    GET_SERVICE_SUPERVISOR_BY_TICKET: "services/orders/supervisor",
    GET_SERVICE_EMPLOYEE_BY_TICKET: "services/orders/employee",
    GET_SERVICE_BY_TICKET: "services/orders/ticket",
    GET_SERVICE_BY_ID: "services/order",
    COMPLETE_SERVICE: "service/order/complete",
    GET_ALL_SERVICES: "services/orders",
    UPDATE_SERVICE_STATUS: "service-order",
    UPDATE_SERVICE: "service-order/update",
    GET_TOTAL_SERVICES_BY_YEAR: "/services/orders/total",
    GET_TOTAL_SERVICES_BY_MONTH: "/services/orders/total-by-month"
  },
  LOCATION: {
    CURRENT_LOCATION: "CURRENT"
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
  STORAGE: {
    EMAIL: "email"
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


const businessLabels = {
  cleaning: {
    Hotel: "Hotel Cleaning - Premises",
    Hospital: "Hospital Cleaning - Facility",
    Office: "Office Cleaning - Premises",
    default: "Commercial Cleaning - Area"
  },
  painting: {
    Hotel: "Hotel Painting - Lobby",
    Hospital: "Hospital Painting - Areas",
    Office: "Office Painting - Workspace",
    default: "Commercial Painting - Areas"
  },
  defaultBusinessType: "Office"
};


export function getBusinessLabel(businessType = businessLabels.defaultBusinessType, category) {
  const labelsForCategory = businessLabels[category];

  if (!labelsForCategory) {
    return `Category ${category} not found`;
  }

  return labelsForCategory[businessType] || labelsForCategory.default;
}


export const tabIds = {
  TAB_ID_SERVICES: "services",
  TAB_ID_PRODUCTS: "orders",
  TAB_ID_RAITING: "raiting",
};

export const headers = {
  HEADER_CONTACT: "headerContact",
};

