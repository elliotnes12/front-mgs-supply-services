import { ENV } from "../utils";

export class Customer {

    async findAll(accessToken, page, limit) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CUSTOMER}`
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

    async findCustomerByName(accessToken, name, page, limit) {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CUSTOMER_BY_NAME}`
            .replace("{page}", page).replace("{limit}", limit);


        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                name: name
            }),
        };

        const response = await fetch(url, params);
        return await response.json();
    }

    async findCustomerByEmail(accessToken, email) {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CUSTOMER_BY_EMAIL}`;


        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                email: email
            }),
        };

        const response = await fetch(url, params);
        return await response.json();
    }
}