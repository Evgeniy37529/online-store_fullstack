import { publicAxiosInstance } from './axiosInstance';
import { typeFetchDevice, typesDevice, postTypeDevice } from '../typesApp/device';
import { AxiosResponse } from 'axios';
import { typeQueryDevice } from '../typesApp/device';

export const fetchDevices = async (params?: typeQueryDevice) => {
  let urlParams;
  const queryParams = new URLSearchParams(params);

  if (params?.brandId === 'undefined') {
    queryParams.delete('brandId');
  }

  if (params?.typeId === 'undefined') {
    queryParams.delete('typeId');
  }

  urlParams = '?' + queryParams.toString();

  const response: AxiosResponse<typeFetchDevice> = await publicAxiosInstance.get(
    `/device${urlParams}`
  );

  return await response.data;
};

export const fetchOneDevice = async (id: number) => {
  const response: AxiosResponse<typesDevice> = await publicAxiosInstance.get(`/device/${id}`);

  return await response.data;
};

export const addDevice = async (device: postTypeDevice) => {
  const response = await publicAxiosInstance.post('/device', device);
  return await response.data;
};
