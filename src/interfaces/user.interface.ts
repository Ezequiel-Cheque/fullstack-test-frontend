export interface UserEntity {
    name: string;
    lastname: string;
    email: string;
    password: string;
    id: string;
    token?: string;
}

export interface CreateUser {
    email: string;
    password: string;
    name: string;
    lastname: string;
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

export interface CreateResponse {
    success: boolean;
    message: string;
    payload: {
        user: UserEntity
    }
}

export interface UserContextType {
    logged: boolean;
    user?: UserEntity;
    logIn: (email:string, password: string)=>void;
    logOut: ()=>void;
}