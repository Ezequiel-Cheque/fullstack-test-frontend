import { UserContextType, UserEntity } from "../../interfaces/user";


type AuthAction = 
    | { type: "login", payload: UserEntity }
    | { type: "logout" }

export const authReducer = (state: UserContextType, action: AuthAction): UserContextType  => {

    switch( action.type ) {
        case "login":
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case "logout":
            return {
                ...state,
                logged: false,
            };
        
        default:
            return state;
    
    }

}