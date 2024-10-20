import { ENV } from "../../../utils";

export class ServiceOrder {
    async create(token, data) {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CREATE_ORDER}`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, params);
        return await response.json();
    }
}