import { ReactNode, useReducer } from "react";
import { AuthContext, initialUser } from "./AuthContext";
import { authReducer } from "./authReducer";



interface Props {
    children?: ReactNode
}
export const AuthProvider = ({ children }: Props) => {

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
        console.log({email, password});
        // const loginData = await login({email, password});
        // if (loginData.success) {
        //     localStorage.setItem('user', JSON.stringify(loginData.payload));
        //     dispatch({ type: "login", payload: loginData.payload });
        // } else {
        //     toast({
        //         title: "Usuario incorrecto!!",
        //         description: "Los datos proporcionados no corresponden a un usuario valido",
        //         className: "bg-red-600 text-zinc-50"
        //     });
        // }
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