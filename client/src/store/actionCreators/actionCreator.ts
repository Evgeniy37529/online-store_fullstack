import { fetchTypes } from '../../api/typeAPI';
import { fetchBrands } from '../../api/brandAPI';
import { fetchDevices } from '../../api/devicesAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { typeQueryDevice } from '../../typesApp/device';
import { createUsers } from '../../api/userAPI';
import { typeUser } from '../../typesApp/user';
import { authorization } from '../../api/userAPI';

export const getTypes = createAsyncThunk('types/getTypes', () => {
  return fetchTypes();
});

export const getBrands = createAsyncThunk('brands/getBrands', () => {
  return fetchBrands();
});

export const getDevices = createAsyncThunk('devices/getDevices', (params: typeQueryDevice) => {
  return fetchDevices(params);
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
