import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBasket, addToBasket, deleteFromCart, fetchOneItem } from '../../../api/basketAPI';

export const getBasket = createAsyncThunk('basket/getBasket', (userId: number) => {
  return fetchBasket(userId);
});

export const postToBasket = createAsyncThunk(
  'basket/postToBasket',
  (params: { basketId: number; deviceId: number }) => {
    return addToBasket(params);
  }
);

export const removeItemFromBasket = createAsyncThunk(
  'basket/removeItemFromBasket',
  (id: number) => {
    return deleteFromCart(id);
  }
);

export const getOneItemBasket = createAsyncThunk(
  'basket/getOneItemBasket',
  ({ basketId, deviceId }: { basketId: number; deviceId: number }) => {
    return fetchOneItem(basketId, deviceId);
  }
);
