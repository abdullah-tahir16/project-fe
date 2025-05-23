import axios from 'axios';

const httpBackend = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true, // Enable withCredentials for CORS
    headers: {
        'Accept': 'application/json',
    },
});

// Add interceptor to handle different Content-Types
httpBackend.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
});

export default httpBackend;
