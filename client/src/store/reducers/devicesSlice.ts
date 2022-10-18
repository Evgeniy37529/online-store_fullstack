import { createSlice } from '@reduxjs/toolkit';
import { IState } from '../../typesApp/device';
import { getDevices, getOneDevice, postDevice } from '../actionCreators/actionCreator';
import { typeFetchDevice, typesDevice } from '../../typesApp/device';

const initialState: IState = {
  devices: [],
  selectedIdDevice: null,
  loading: false,
};

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setSelectedIdDevice: (state: IState, action: { payload: number | null }) => {
      state.selectedIdDevice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getDevices.fulfilled.type,
      (state, action: { type: string; payload: typeFetchDevice }) => {
        state.devices = action.payload.rows;
        state.loading = false;
      }
    );
    builder.addCase(getDevices.pending.type, (state: IState) => {
      state.loading = true;
    });
    builder.addCase(
      getOneDevice.fulfilled.type,
      (state: IState, action: { type: string; payload: typesDevice[] }) => {
        state.devices = action.payload;
      }
    );
    builder.addCase(postDevice.fulfilled.type, (state: IState) => {
      return state;
    });
  },
});
export const { setSelectedIdDevice } = devicesSlice.actions;
export default devicesSlice.reducer;
