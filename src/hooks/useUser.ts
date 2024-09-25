import { ErrorResponse } from "react-router-dom";
import { LoginInterface, LoginResponse } from "../interfaces/user.interface";
import { envs } from "../plugins/envs.plugin";
import { HttpService } from "../plugins/http.plugin";

export const useUser = () => {

    const http = new HttpService();

    // const { user } = useContext(AuthContext);
    // const token = user ? user.token : "";

    const logInUser = async (payload: LoginInterface): Promise<LoginResponse|ErrorResponse> =>  {
        const url = `${envs.API_URL}/user/login`;
        const headers = {};
        const response = await http.post({ url, headers, payload });
        return response;
    }

    return {
        logInUser
    }

};