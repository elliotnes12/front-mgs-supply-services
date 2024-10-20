import { ENV } from "../utils";

export class Service {


    async findAllServices(accessToken, id_supervisor) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_SUPERVISOR}/${id_supervisor}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findAllServicesByCustomer(accessToken, id_customer) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_CUSTOMER}/${id_customer}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findAllServicesByManager(accessToken) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_BY_MANAGER}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }

    async findAllServicesByEmployee(accessToken, id_employee) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_EMPLOYEE}/${id_employee}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findAllServicesWorkFlow(accessToken) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_BY_WORKFLOW}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findById(accessToken, id) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_SERVICE_BY_ID}/${id}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }

    async updateStatus(accessToken, id, status) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.UPDATE_SERVICE_STATUS}`;
        const params = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                id: id,
                status: status,
            }),
        };

        const response = await fetch(url, params);
        return await response.json();
    }

    async update(accessToken, data) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.UPDATE_SERVICE}`;
        const params = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async completeService(accessToken, formData) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COMPLETE_SERVICE}`;

        console.log(url)
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`, // Remove Content-Type for FormData
            },
            body: formData,
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findByServicesInProcessSupervisor(accessToken, id) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_IN_PROGRESS_SUPERVISOR}/${id}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findByServicesInProcessEmployee(accessToken, id) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_ALL_SERVICES_IN_PROGRESS_EMPLOYEE}/${id}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }



    async findServiceByTicket(accessToken, ticket) {

        ticket = ticket.trim();
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_SERVICE_BY_TICKET}/${ticket}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findServiceByTicketAndSupervisor(accessToken, id_supervisor, ticket) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_SERVICE_SUPERVISOR_BY_TICKET}/${id_supervisor}/${ticket}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }

    async findServiceByTicketAndEmployee(accessToken, id_employee, ticket) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_SERVICE_EMPLOYEE_BY_TICKET}/${id_employee}/${ticket}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findServiceByTicketAndCustomer(accessToken, id_customer, ticket) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_SERVICE_CUSTOMER_BY_TICKET}/${id_customer}/${ticket}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findTotalServicesByYear(accessToken, year) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_TOTAL_SERVICES_BY_YEAR}/${year}`;
        const params = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, params);
        return await response.json();
    }


    async findTotalServicesByMonth(accessToken) {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GET_TOTAL_SERVICES_BY_MONTH}`;
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