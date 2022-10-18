import axios from 'axios';

const publicAxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const authAxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

authAxiosInstance.interceptors.request.use((config) => {
  config.headers = { ...config.headers, Authorization: `Bearer ${localStorage.token}` };
  return config;
});

export { publicAxiosInstance, authAxiosInstance };
