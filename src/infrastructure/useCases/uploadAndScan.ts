import { useScanEmails } from '../hooks/useScanEmails';
import { toast } from 'react-toastify';

export const useUploadAndScan = () => {
    const { mutate, ...rest } = useScanEmails();

    const scan = (file: File) => {
        mutate(file, {
            onSuccess: () => {
                toast.success('Emails scanned successfully');
            },
            onError: () => {
                toast.error('Scan failed. Check the file or server.');
            },
        });
    };

    return { scan, ...rest };
};
