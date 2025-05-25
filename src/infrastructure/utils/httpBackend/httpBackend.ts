import axios from 'axios';

const httpBackend = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
    },
});

httpBackend.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
});

export default httpBackend;
