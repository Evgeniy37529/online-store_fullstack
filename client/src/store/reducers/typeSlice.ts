import { createSlice } from '@reduxjs/toolkit';
import { getTypes, postType } from '../actionCreators/actionCreator';
import { typeTypes, IState, typeType } from '../../typesApp/types';

const initialState: IState = {
  types: [],
  selectedType: null,
};

export const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setSelectedType: (state, action: { payload: typeType | null }) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTypes.fulfilled.type,
      (state: IState, action: { type: string; payload: typeTypes }) => {
        state.types = action.payload;
      }
    );
    builder.addCase(postType.fulfilled.type, (state: IState) => {
      return state;
    });
  },
});
export const { setSelectedType } = typesSlice.actions;
export default typesSlice.reducer;
