import { ENV } from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Profile {
  async active(email, password,idEmployee) {
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

      if (response.status !== 201) throw result;

      return result;

    } catch (error) {
      throw error;
    }
  }



}