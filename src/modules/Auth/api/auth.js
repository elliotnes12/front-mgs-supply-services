import { ENV } from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";



export class Auth {


  async register(email, password, idEmployee, name) {
    let json = undefined;

    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;

    if (idEmployee) {
      json = JSON.stringify({ email, password, idEmployee });
    }
    else {
      json = JSON.stringify({ email, name, password });
    }

    const response = await fetch(url, this.getPostParams(json));
    return await response.json();
  }

  async login(email, password) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
    const response = await fetch(url, this.getPostParams(JSON.stringify({ email, password })));
    return await response.json();
  }


  async refreshAccessToken(refreshToken) {

    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REFRESH_ACCESS_TOKEN}`;

    const response = await fetch(url, JSON.stringify({ refreshToken: refreshToken }));
    return await response.json();
  }

  async setAccessToken(token) {
    await AsyncStorage.setItem(ENV.JWT.ACCESS, token);
  }
  async getAccessToken() {
    return await AsyncStorage.getItem(ENV.JWT.ACCESS);
  }

  async setRefreshToken(token) {
    await AsyncStorage.setItem(ENV.JWT.REFRESH, token);
  }
  async getRefreshToken() {
    return await AsyncStorage.getItem(ENV.JWT.REFRESH);
  }

  getPostParams(json) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
      timeout: 10000,
    };
  }

  async removeTokens() {
    await AsyncStorage.removeItem(ENV.JWT.ACCESS);
    await AsyncStorage.removeItem(ENV.JWT.REFRESH);
  }


}