import type { ScanResponse} from "../../types/types.ts";
import {httpBackend} from "../../utils/httpBackend";

export const scanEmailsAPI = async (file: File): Promise<ScanResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await httpBackend.post<ScanResponse>('/scan', formData);
    if (response.data?.data) {
        return { 
            message: response.data.message || 'Scan complete',
            data: response.data.data 
        };
    }
    throw new Error(response.data?.message || 'Failed to scan emails');
};
