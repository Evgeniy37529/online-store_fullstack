import { publicAxiosInstance } from './axiosInstance';
import { typeFetchDevice } from '../typesApp/device';
import { AxiosResponse } from 'axios';
import { typeQueryDevice } from '../typesApp/device';

export const fetchDevices = async (params: typeQueryDevice) => {
  let urlParams;
  const queryParams = new URLSearchParams(params);
  urlParams = params ? '?' + queryParams.toString() : '';

  const response: AxiosResponse<typeFetchDevice> = await publicAxiosInstance.get(
    `/device${urlParams}`
  );

  return response.data;
};
