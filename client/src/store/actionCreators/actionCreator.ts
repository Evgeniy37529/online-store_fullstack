import { fetchTypes, addType } from '../../api/typeAPI';
import { fetchBrands, addBrand } from '../../api/brandAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { typeQueryDevice, postTypeDevice } from '../../typesApp/device';
import { createUsers } from '../../api/userAPI';
import { typeUser } from '../../typesApp/user';
import { authorization } from '../../api/userAPI';
import { fetchDevices, fetchOneDevice, addDevice } from '../../api/devicesAPI';
import { checkAuth } from '../../api/userAPI';

export const getTypes = createAsyncThunk('types/getTypes', () => {
  return fetchTypes();
});

export const postType = createAsyncThunk('types/postType', (name: string) => {
  return addType(name);
});

export const getBrands = createAsyncThunk('brands/getBrands', () => {
  return fetchBrands();
});

export const postBrand = createAsyncThunk('brands/postBrand', (name: string) => {
  return addBrand(name);
});

export const getDevices = createAsyncThunk(
  'devices/getDevices',
  async (params?: typeQueryDevice) => {
    return await fetchDevices(params);
  }
);

export const postDevice = createAsyncThunk('devices/postDevice', (device: postTypeDevice) => {
  return addDevice(device);
});

export const postUser = createAsyncThunk(
  'user/postUser',
  async (params: typeUser, { rejectWithValue }) => {
    try {
      return await createUsers(params);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (params: typeUser, { rejectWithValue }) => {
    try {
      return await authorization(params);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getOneDevice = createAsyncThunk('devices/getOneDevice', (id: number) => {
  return fetchOneDevice(id);
});

export const checkUser = createAsyncThunk('user/checkUser', () => {
  return checkAuth();
});
