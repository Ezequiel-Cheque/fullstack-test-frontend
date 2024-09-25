export interface UserEntity {
    name: string;
    lastname: string;
    email: string;
    password: string;
    stripe_customer_id: string;
    token?: string;
}

export interface LoginInterface {
    email: string;
    password: string;
}

export interface ErrorResponse {
    detail: {
        success: boolean,
        message: string,
        errors: string[]
    }
}

export interface LoginResponse {
    success: boolean;
    message: string;
    payload: {
        token: string,
        user: UserEntity
    }
}

export interface UserContextType {
    logged: boolean;
    user?: UserEntity;
    logIn: (email:string, password: string)=>void;
    logOut: ()=>void;
}