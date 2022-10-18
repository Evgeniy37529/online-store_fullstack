import { publicAxiosInstance } from './axiosInstance';
import { AxiosResponse } from 'axios';
import { basketType, userBasketItem } from '../typesApp/basket';

export const fetchBasket = async (basketId: number) => {
  const response: AxiosResponse<basketType[]> = await publicAxiosInstance.get(
    `/basket/${basketId}`
  );
  return response.data;
};

export const addToBasket = async (params: { basketId: number; deviceId: number }) => {
  await publicAxiosInstance.post('/basket', params);
};

export const deleteFromCart = async (id: number) => {
  await publicAxiosInstance.delete(`/basket/${id}`);
};

export const fetchOneItem = async (basketId: number, deviceId: number) => {
  const response: AxiosResponse<userBasketItem> = await publicAxiosInstance.get(
    `/basket/${basketId}/${deviceId}`
  );
  return response.data;
};
