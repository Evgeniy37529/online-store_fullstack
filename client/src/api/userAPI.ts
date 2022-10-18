/* eslint-disable @typescript-eslint/no-unused-expressions */
import { authAxiosInstance, publicAxiosInstance } from './axiosInstance';
import { typeUser } from '../typesApp/user';
import jwtDecode from 'jwt-decode';

export const createUsers = async ({ email, password, role = 'ADMIN' }: typeUser) => {
  const response = await publicAxiosInstance.post('/user/registration', {
    email,
    password,
    role,
  });
  localStorage.setItem('token', response.data.token);

  return await jwtDecode(response.data.token);
};

export const authorization = async ({ email, password }: typeUser) => {
  const response = await publicAxiosInstance.post('/user/login', { email, password });
  localStorage.setItem('token', response.data.token);
  return await jwtDecode(response.data.token);
};

export const checkAuth = async () => {
  const response = await authAxiosInstance.get('user/auth');
  localStorage.setItem('token', response.data.token);
  return await jwtDecode(response.data.token);
};
