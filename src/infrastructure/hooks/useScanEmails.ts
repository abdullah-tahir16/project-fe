import {scanEmailsAPI} from "../apis/scanEmailsAPI.ts";
import {useMutation} from "@tanstack/react-query";


export const useScanEmails = () => {
    // @ts-ignore
    return useMutation(scanEmailsAPI);
};
