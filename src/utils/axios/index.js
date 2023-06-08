import axios from "axios";

export const instanceAuth = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
});

instanceAuth.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});