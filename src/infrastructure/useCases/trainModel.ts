import { useTrainModel } from '../hooks/useTrainModel';
import { toast } from 'react-toastify';

export const useTrainModelUseCase = () => {
    const { mutate, ...rest } = useTrainModel();

    const train = () => {
        mutate(undefined, {
            onSuccess: (data) => {
                toast.success(data.message || 'Model trained successfully!');
            },
            onError: () => {
                toast.error('Training failed. Please try again.');
            },
        });
    };

    return { train, ...rest };
};
