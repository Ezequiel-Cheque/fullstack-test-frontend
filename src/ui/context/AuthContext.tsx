import { createContext } from "react";
import { UserContextType } from "../../interfaces/user.interface";

export const initialUser: UserContextType = {
    logged: false,
    logIn : ()=>{},
    logOut: ()=>{},
};

export const AuthContext = createContext<UserContextType>(initialUser);