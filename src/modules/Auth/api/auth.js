import { ENV } from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Auth {
  async register(email, password,idEmployee) {
    let data = undefined;
    try {

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;

      if(idEmployee){
          data = JSON.stringify({ email, password, idEmployee });
      }
      else{
        data = JSON.stringify({ email, password });
      }

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        timeout: 10000
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.meta.code !== 201) throw result;

      return result;

    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        timeout: 10000,
      };

      const response = await fetch(url, params);
   

      const result = await response.json();
        

      if (result.meta.code === 400) {
        throw result;
      }


      return result;
    } catch (error) {
      throw error;
    }
  }

  async refreshAccessToken(refreshToken){

    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REFRESH_ACCESS_TOKEN}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          refreshToken:refreshToken
         }),
         timeout: 10000,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
    
  }

  async setAccessToken(token){
    await AsyncStorage.setItem(ENV.JWT.ACCESS,token);
  }
  async getAccessToken(){
    return await AsyncStorage.getItem(ENV.JWT.ACCESS);
  }

  async setRefreshToken(token){
    await AsyncStorage.setItem(ENV.JWT.REFRESH,token);
  }
  async getRefreshToken(){
    return await AsyncStorage.getItem(ENV.JWT.REFRESH);
  }

  async removeTokens(){
    await AsyncStorage.removeItem(ENV.JWT.ACCESS);
    await AsyncStorage.removeItem(ENV.JWT.REFRESH);
  }


}