import { createSlice } from '@reduxjs/toolkit';
import { getBrands, postBrand } from '../actionCreators/actionCreator';
import { IState, typeBrands, typeBrand } from '../../typesApp/brands';

const initialState: IState = {
  brands: [],
  selectedBrand: null,
};

export const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setSelectedBrand: (state, action: { type: string; payload: typeBrand | null }) => {
      state.selectedBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getBrands.fulfilled.type,
      (state, action: { type: string; payload: typeBrands }) => {
        state.brands = action.payload;
      }
    );
    builder.addCase(postBrand.fulfilled.type, (state: IState) => {
      return state;
    });
  },
});
export const { setSelectedBrand } = brandSlice.actions;
export default brandSlice.reducer;
