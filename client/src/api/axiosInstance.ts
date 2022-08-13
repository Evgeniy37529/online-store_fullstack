import axios from 'axios';

//const axiosInstance = axios.create();

const publicAxiosInstance = axios.create({
  //baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://localhost:5000/api',
});

const authAxiosInstance = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://localhost:5000/api/user',
});

authAxiosInstance.interceptors.request.use((config) => {
  config.headers = { ...config.headers, Authorization: `Bearer ${localStorage.token}` };
  return config;
});

export { publicAxiosInstance, authAxiosInstance };
