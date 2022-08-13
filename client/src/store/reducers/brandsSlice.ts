import { createSlice } from '@reduxjs/toolkit';
import { getBrands } from '../actionCreators/actionCreator';
import { IState, typeBrands } from '../../typesApp/brands';

const initialState: IState = {
  brands: [],
  selectedBrand: null,
};

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setSelectedBrand: (state, action: { type: string; payload: { id: number; name: string } }) => {
      state.selectedBrand = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getBrands.fulfilled.type,
      (state, action: { type: string; payload: typeBrands }) => {
        state.brands = action.payload;
      }
    );
  },
});
export const { setSelectedBrand } = brandSlice.actions;
export default brandSlice.reducer;
