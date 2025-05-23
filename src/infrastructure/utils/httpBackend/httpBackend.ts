import axios from 'axios';

const httpBackend = axios.create({
    baseURL:"http://localhost:8080",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default httpBackend;
