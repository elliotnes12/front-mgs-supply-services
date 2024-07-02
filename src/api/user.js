import { ENV } from "../utils";

export class User {
  async getMe(accessToken) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }


  
  async getAllSupport(accessToken){
    try {
      console.log(accessToken)
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_SUPPORT}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (result.meta.code !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }


  async getAll(accessToken){
    try {
      console.log(accessToken)
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}