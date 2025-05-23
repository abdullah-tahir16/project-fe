import {httpBackend} from "../utils/httpBackend";
import type {TrainResponse} from "../../types/types.ts";

export const trainModelAPI = async (): Promise<TrainResponse> => {
    const response = await httpBackend.post<TrainResponse>('/train');
    if (response.data?.data) {
        return response.data;
    }
    throw new Error(response.data?.message || 'Failed to train model');
};
