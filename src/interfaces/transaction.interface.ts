
export interface AttachPaymentMethodPayload {
    payment_method_id: string;
    customer_id: string;
}

export interface AttachResponse {
    success: boolean;
    message: string;
    payload: {
        id: string
    }
}

export interface ErrorResponsePayment {
    detail: {
        success: boolean,
        message: string,
        errors: string[]
    }
}

export interface TransactionEntity {
    amount: number;
    description: string;
    payment_method_id: string;
    currency: string;
    customer_id: string;
    return_url: string;
    course_id: string;
};

export interface TransactionResponse {
    success: boolean;
    message: string;
    payload: {
        id: string
    }
}