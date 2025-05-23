import type {TrainResponse} from "../../types/types.ts";
import {useMutation} from "@tanstack/react-query";
import {trainModelAPI} from "../apis/trainModelAPI.ts";


export const useTrainModel = () => {
    // @ts-ignore
    return useMutation<TrainResponse, Error, void>(trainModelAPI);
};
