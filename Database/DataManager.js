
import { DatabaseLoader } from './DatabaseLoader.js';

export const DataManager = {

    currentSession: null,

    async requestAccess(creds) {
        const payload = { method: "LOAD", ...creds };
        return await DatabaseLoader.pipe(payload);
    },

    async fetchProjectData(projectName) {
        const payload = { method: "GET_PROJECT", project: projectName, ...this.currentSession };
        return await DatabaseLoader.pipe(payload);
    },

    async syncUpdate(blob) {
        const payload = { method: "PUT", data: blob, ...this.currentSession };
        return await DatabaseLoader.pipe(payload);
    }
};
