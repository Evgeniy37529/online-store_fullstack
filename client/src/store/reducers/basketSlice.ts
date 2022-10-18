import { createSlice } from '@reduxjs/toolkit';
import { basketType, IState, userBasketItem } from '../../typesApp/basket';
import {
  getBasket,
  postToBasket,
  removeItemFromBasket,
  getOneItemBasket,
} from '../actionCreators/basketThunk/basketThunk';

const initialState: IState = {
  idBasket: null,
  userBasket: [],
  quantityInBasket: 0,
  selectedItem: null,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setIdBasket: (state: IState, action: { payload: number }) => {
      state.idBasket = action.payload;
    },
    resetSelectedItem: (state: IState, action: { payload: null }) => {
      state.selectedItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getBasket.fulfilled.type,
      (state: IState, action: { type: string; payload: basketType }) => {
        state.userBasket = action.payload.rows;
        state.quantityInBasket = action.payload.count;
      }
    );
    builder.addCase(postToBasket.fulfilled.type, (state: IState) => {
      return state;
    });
    builder.addCase(removeItemFromBasket.fulfilled.type, (state: IState) => {
      return state;
    });
    builder.addCase(
      getOneItemBasket.fulfilled.type,
      (state: IState, action: { type: string; payload: userBasketItem }) => {
        state.selectedItem = action.payload;
      }
    );
  },
});

export default basketSlice.reducer;
export const { setIdBasket, resetSelectedItem } = basketSlice.actions;
