import type {EmailPrediction, ScanResponse} from "../../types/types.ts";
import {httpBackend} from "../utils/httpBackend";

export const scanEmailsAPI = async (file: File): Promise<EmailPrediction[]> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await httpBackend.post<ScanResponse>('/scan', formData);
    if (response.data?.data) {
        return response.data.data;
    }
    throw new Error(response.data?.message || 'Failed to scan emails');
};
