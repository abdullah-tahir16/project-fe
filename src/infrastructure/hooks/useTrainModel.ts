import type {TrainResponse} from "../../types/types.ts";
import {useMutation} from "@tanstack/react-query";
import {trainModelAPI} from "../apis/trainModelAPI.ts";

export const useTrainModel = () => {
    return useMutation<TrainResponse, Error, void>({
        mutationFn: trainModelAPI,
        mutationKey: ['train-model']
    });
};
