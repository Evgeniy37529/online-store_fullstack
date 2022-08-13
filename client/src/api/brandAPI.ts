import { publicAxiosInstance } from './axiosInstance';

export const fetchBrands = async () => {
  const response = await publicAxiosInstance.get('/brand');
  return response.data;
};
