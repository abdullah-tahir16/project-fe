import {httpBackend} from "../utils/httpBackend";
import type {TrainResponse} from "../../types/types.ts";

export const trainModelAPI = async (): Promise<TrainResponse> => {
    const response = await httpBackend.post('/train');
    return response.data as TrainResponse;
};
