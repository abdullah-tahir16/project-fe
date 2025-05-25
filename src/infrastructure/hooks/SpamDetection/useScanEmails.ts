import {scanEmailsAPI} from "../../apis/SpamDetection/scanEmailsAPI.ts";
import {useMutation} from "@tanstack/react-query";
import type {ScanResponse} from "../../types/types.ts";

export const useScanEmails = () => {
    return useMutation<ScanResponse, Error, File>({
        mutationFn: scanEmailsAPI,
        mutationKey: ['scan-emails']
    });
};
