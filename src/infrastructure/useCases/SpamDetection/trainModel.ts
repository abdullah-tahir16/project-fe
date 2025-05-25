import { useTrainModel } from '../../hooks/SpamDetection/useTrainModel.ts';
import { toast } from 'react-toastify';

export const useTrainModelUseCase = () => {
    const { mutate, ...rest } = useTrainModel();

    const train = () => {
        mutate(undefined, {
            onSuccess: (data) => {
                toast.success(data.message || ' Model trained successfully.');
            },
            onError: (error: Error) => {
                toast.error(error.message || ' Training failed.');
            },
        });
    };

    return { train, ...rest };
};
