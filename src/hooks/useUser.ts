import { ErrorResponse } from "react-router-dom";
import { CreateResponse, CreateUser, LoginInterface, LoginResponse } from "../interfaces/user.interface";
import { envs } from "../plugins/envs.plugin";
import { HttpService } from "../plugins/http.plugin";

export const useUser = () => {

    const http = new HttpService();

    const logInUser = async (payload: LoginInterface): Promise<LoginResponse|ErrorResponse> =>  {
        const url = `${envs.API_URL}/user/login`;
        const headers = {};
        const response = await http.post({ url, headers, payload });
        return response;
    }

    const createUser = async (payload: CreateUser):Promise<CreateResponse|ErrorResponse> => {
        const url = `${envs.API_URL}/user/create`;
        const headers = {
            "accept": "application/json",
            "Content-Type": "application/json"
        };
        const data = { url, headers, payload }
        const response = await http.post(data);
        return response;
    };

    return {
        logInUser,
        createUser
    }

};