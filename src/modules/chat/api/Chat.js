import { ENV } from "../../../utils";

export class Chat {
    async create(token, participanIdOne, participanIdTwo) {
        try {


            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    "participant_id_one": participanIdOne,
                    "participant_id_two": participanIdTwo
                })
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (result?.meta?.code != 200 && result?.meta?.code != 201) throw result;

            return result;
        } catch (error) {
        }
    }

    async getAll(token) {
        try {

          
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}`;
            const params = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };

            const response = await fetch(url, params);
            const result = await response.json();


            if (result.meta.code != 200 ) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }

    
    async getLastMessage(token,chatId) {
        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE_LAST}/${chatId}`;
            const params = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (result.meta.code != 200 ) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }


    async deleteChat(token,chatId) {
        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}/${chatId}`;
            const params = {
                method:"delete",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (result.meta.code != 200 ) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
}