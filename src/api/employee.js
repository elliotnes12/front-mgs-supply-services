import { ENV } from "../utils";


export class Employee {



    async findAll(accessToken, page, limit, type) {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.EMPLOYEE}`
            .replace("{page}", page).replace("{limit}", limit).replace("type", type);
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();

    }

    async findEmployeById(accessToken, id, type) {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.EMPLOYEE_BY_ID}/${id}/${type}`;

        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();

    }

    async findEmployeByName(accessToken, name, type, page, limit,) {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.EMPLOYEE_BY_NAME}`
            .replace("{page}", page).replace("{limit}", limit);


        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                name: name,
                type: type
            }),
        };

        const response = await fetch(url, params);
        return await response.json();

    }
}