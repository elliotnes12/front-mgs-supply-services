import { ENV } from "../utils";


export class Employee {



    async findAll(accessToken, page, limit) {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.EMPLOYEE}`
            .replace("{page}", page).replace("{limit}", limit);
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