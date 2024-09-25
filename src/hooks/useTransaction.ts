import { useContext } from "react";
import { envs } from "../plugins/envs.plugin";
import { HttpService } from "../plugins/http.plugin";
import { AuthContext } from "../ui/context/AuthContext";
import { AttachPaymentMethodPayload, AttachResponse, ErrorResponsePayment, TransactionEntity, TransactionResponse } from "../interfaces/transaction.interface";

export const useTransaction = () => {

    const http = new HttpService();
    const { user } = useContext(AuthContext);
    const token = user ? user.token : "";

    const attachPaymentMethod = async(payload: AttachPaymentMethodPayload):Promise<AttachResponse|ErrorResponsePayment> => {
        const url = `${envs.API_URL}/payment-methods/attach`;
        const headers = {
            "Authorization": `Bearer ${token}`,
            "accept": "application/json",
            "Content-Type": "application/json"
        };
        const data = { url, headers, payload }
        const response = await http.post(data);
        return response;
    };

    const createTransaction = async (payload: TransactionEntity):Promise<TransactionResponse|ErrorResponsePayment> => {
        const url = `${envs.API_URL}/transaction/create`;
        const headers = {
            "Authorization": `Bearer ${token}`,
            "accept": "application/json",
            "Content-Type": "application/json"
        };
        const data = { url, headers, payload }
        const response = await http.post(data);
        return response;
    };

    return {
        attachPaymentMethod,
        createTransaction
    };

};