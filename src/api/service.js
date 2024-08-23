import { ENV } from "../utils";

export class Service {


    async findAllServices(accessToken) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        return await fetch(url, params);

    }

}