import { QueryClient } from '@tanstack/react-query';
import { QueryCache } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
    queryCache: new QueryCache({
        onError: (error, query) => {
            console.log(error, query);
            toast.error(`Something went wrong: ${error.message}`);
        },
    }),
});
