import axios from 'axios';

export const academyApi = axios.create({
    baseURL: import.meta.env.VITE_API_ACADEMY_URL
})