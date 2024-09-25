
type PostHttp = {
    url: string;
    payload: object;
    headers: object;
};

export interface HttpInterface {
    get(url: string, headers: object): Promise<any>;
    post(data: PostHttp): Promise<any>;
    put(data: PostHttp): Promise<any>;
};

export interface backendService404 {
    success: boolean;
    message: string;
    errors: Array<string>;
    payload: object;
}

export interface backendService422 {
    detail: Array<object>;
}

export interface backendService500{
    success: boolean;
    message: string;
    errors: Array<string>;
}