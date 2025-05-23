import { useScanEmails } from '../hooks/useScanEmails';
import { toast } from 'react-toastify';

export const useUploadAndScan = () => {
    const { mutate, ...rest } = useScanEmails();

    const scan = (file: File) => {
        mutate(file, {
            onSuccess: () => {
                toast.success('✅ Scan complete.');
            },
            onError: (error: any) => {
                toast.error(error?.message || '❌ Failed to scan emails');
            },
        });
    };

    return { scan, ...rest };
};
