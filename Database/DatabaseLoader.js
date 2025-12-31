
export const DatabaseLoader = {

    url: "https://script.google.com/macros/s/AKfycbyvcPsgDniiS6ubijvaWqiumvTOksFI5KnMIW9sI2E4MPDvUODwWlBZT4junhktuHAeog/exec",

    async pipe(payload) {

        try {
            const response = await fetch(this.url, {
                method: "POST",
                body: JSON.stringify(payload)
            });
            return await response.json(); 
        } catch (e) {
            return { error: "Tunnel Blocked", details: e };
        }
    }
};
