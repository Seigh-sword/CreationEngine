// DatabaseLoader.js
export const DatabaseLoader = {
    url: "https://script.google.com/macros/s/AKfycbyvcPsgDniiS6ubijvaWqiumvTOksFI5KnMIW9sI2E4MPDvUODwWlBZT4junhktuHAeog/exec",

    async request(method, credentials, payload = {}) {
        const body = {
            method: method, 
            username: credentials.username,
            password: credentials.password,
            uuid: credentials.uuid || null,
            data: payload
        };

        try {
            const response = await fetch(this.url, {
                method: "POST",
                body: JSON.stringify(body)
            });
            return await response.text();
        } catch (error) {
            console.error("DatabaseLoader Error:", error);
            return "Error: Connection Failed";
        }
    }
};
