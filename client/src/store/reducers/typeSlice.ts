import { createSlice } from '@reduxjs/toolkit';
import { getTypes } from '../actionCreators/actionCreator';
import { typeTypes, IState } from '../../typesApp/types';

// const initialState: typeTypes = [];

const initialState: IState = {
  types: [],
};

export const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    red: (state) => console.log(state),
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTypes.fulfilled.type,
      (state: IState, action: { type: string; payload: typeTypes }) => {
        state.types = action.payload;
      }
    );
  },
});

export default typesSlice.reducer;
