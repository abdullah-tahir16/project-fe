import type {EmailPrediction} from "../../types/types.ts";
import {httpBackend} from "../utils/httpBackend";


export const scanEmailsAPI = async (file: File): Promise<EmailPrediction[]> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await httpBackend.post('/scan', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data.predictions as EmailPrediction[];
};
