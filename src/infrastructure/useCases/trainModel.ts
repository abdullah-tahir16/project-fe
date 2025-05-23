import {useTrainModel} from "../hooks/useTrainModel.ts";
import {toast} from "react-toastify";


export const useTrainModelUseCase = () => {
    const { mutate, ...rest } = useTrainModel();

    const train = () => {
        mutate(undefined, {
            onSuccess: (data: { message: any; }) => {
                toast.success(data.message || 'Model trained successfully');
            },
            onError: () => {
                toast.error('Training failed. Please check the server.');
            },
        });
    };

    return { train, ...rest };
};
