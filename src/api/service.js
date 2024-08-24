import { ENV } from "../utils";

export class Service {


    async findAllServices(accessToken) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_SUPERVISOR}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json', 
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }

}