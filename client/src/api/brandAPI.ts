import { publicAxiosInstance, authAxiosInstance } from './axiosInstance';

export const fetchBrands = async () => {
  const response = await publicAxiosInstance.get('/brand');
  return response.data;
};

export const addBrand = async (name: string) => {
  await authAxiosInstance.post('/brand', { name });
};
