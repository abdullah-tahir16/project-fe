import {scanEmailsAPI} from "../apis/scanEmailsAPI.ts";
import {useMutation} from "@tanstack/react-query";
import type {EmailPrediction} from "../../types/types.ts";

export const useScanEmails = () => {
    return useMutation<EmailPrediction[], Error, File>({
        mutationFn: scanEmailsAPI,
        mutationKey: ['scan-emails']
    });
};
