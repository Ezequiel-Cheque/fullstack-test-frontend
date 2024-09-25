import Swal from 'sweetalert2';
import { ReactNode, useReducer } from "react";

import { AuthContext, initialUser } from "./AuthContext";
import { authReducer } from "./authReducer";
import { useUser } from "../../hooks/useUser";

interface Props {
    children?: ReactNode
}
export const AuthProvider = ({ children }: Props) => {

    const { logInUser } = useUser();

    const init = () => {
        const user = JSON.parse( localStorage.getItem('user') || "{}");

        return {
            ...initialUser,
            logged: !!user.name,
            user: user
        }
    };

    const [ authState, dispatch ] = useReducer(authReducer, initialUser, init);

    const logIn = async (email: string, password: string) => {
        const response = await logInUser({ email, password });
        console.log(response);
        if ("success" in response) {
            const user = {
                ...response.payload.user,
                token: response.payload.token
            }
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ type: "login", payload: user });
        } else {
            Swal.fire({
                icon: "Error",
                title: "User not found",
                text: "User not registered, check your data"
            });
        }
    }

    const logOut = () => {
        localStorage.removeItem('user');
        dispatch({ type: "logout" })
    };

    return (
        <AuthContext.Provider
            value={{
                ...authState,
                logIn,
                logOut
            }}
        >
            { children }
        </AuthContext.Provider>
    );
};