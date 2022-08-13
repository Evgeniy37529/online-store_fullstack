import { createSlice } from '@reduxjs/toolkit';
import { IState } from '../../typesApp/device';
import { getDevices } from '../actionCreators/actionCreator';
import { typeFetchDevice } from '../../typesApp/device';

const initialState: IState = {
  devices: [],
  selectedDevice: null,
};

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getDevices.fulfilled.type,
      (state, action: { type: string; payload: typeFetchDevice }) => {
        state.devices = action.payload.rows;
      }
    );
  },
});

export default devicesSlice.reducer;
