import { Alert } from "react-native";

export class Response {
  CODE_400 = "The request could not be processed due to a client error";
  CODE_500 = "Something went wrong on our end. Please try again later";
  CODE_200 = "The request was successfully processed";

  getResponse(result) {
    const { meta } = result;
    if (meta) {
      switch (meta.code) {
        case 200:
          return this.getJson(200, this.CODE_200, result?.data);
        case 201:
          return this.getJson(201, this.CODE_200, result?.data);
        case 500:
          return this.getJson(400, this.CODE_500, undefined);
        case 400:
          return this.getJson(400, meta.message, undefined);
        case 401:
          return this.getJson(401, meta.message, undefined);
      }
    }
  }

  getJson(code, message, data) {
    return { code, message, data };
  }
}
