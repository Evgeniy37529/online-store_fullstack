import { publicAxiosInstance } from './axiosInstance';
import { AxiosResponse } from 'axios';
import { typeTypes } from '../typesApp/types';

export const fetchTypes = async () => {
  const response: AxiosResponse<typeTypes> = await publicAxiosInstance.get('/type');
  console.log(response.data);
  return response.data;
};
