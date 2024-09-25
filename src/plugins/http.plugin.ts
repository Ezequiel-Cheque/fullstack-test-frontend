import { HttpInterface } from "../interfaces/http.plugin.interface";


export class HttpService implements HttpInterface {

    public async get(url: string, headers: object) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                ...headers
            }
        });
        if (response.status !== 200) {
            throw new Error("Error faild get");
        }
        return await response.json();
    }
    
    public async post(data: { url: string; payload: object; headers: object; }) {
        
        const { url, payload, headers } = data;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }
    
    public async put(data: { url: string; payload: object; headers: object; }) {
        
        const { url, payload, headers } = data;

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                ...headers
            },
            body: JSON.stringify(payload)
        });
        if (response.status !== 200) {
            throw new Error("Error faild get");
        }
        return await response.json();
    }

}