import { publicAxiosInstance, authAxiosInstance } from './axiosInstance';
import { AxiosResponse } from 'axios';
import { typeTypes } from '../typesApp/types';

export const fetchTypes = async () => {
  const response: AxiosResponse<typeTypes> = await publicAxiosInstance.get('/type');
  return response.data;
};

export const addType = async (type: string) => {
  await authAxiosInstance.post('/type', { name: type });
};
