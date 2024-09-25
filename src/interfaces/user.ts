export interface UserEntity {
    id: string;
    name: string;
    lastname: string;
    email: string;
    imageUrl: string | null;
    token: string;
};


export interface UserContextType {
    logged: boolean;
    user?: UserEntity;
    logIn: (email:string, password: string)=>void;
    logOut: ()=>void;
}