import { useEffect } from 'react';
import {
  getBasket,
  postToBasket,
  removeItemFromBasket,
  getOneItemBasket,
} from '../store/actionCreators/basketThunk/basketThunk';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { useUser } from './useUser';
import { setIdBasket, resetSelectedItem } from '../store/reducers/basketSlice';

export const useBasket = () => {
  const { userBasket, idBasket, quantityInBasket, selectedItem } = useAppSelector(
    (state) => state.basket
  );

  const dispatch = useAppDispatch();
  const { idUser } = useUser();
  const setBasket = (id: number) => dispatch(getBasket(id));
  const writeIdBasket = (id: number) => dispatch(setIdBasket(id));
  const addToBasket = (data: { basketId: number; deviceId: number }) => {
    return dispatch(postToBasket(data));
  };
  const deleteItemFromBasket = (id: number) => dispatch(removeItemFromBasket(id));
  const hasItemInBasket = (params: { basketId: number; deviceId: number }) => {
    dispatch(getOneItemBasket(params));
  };

  const resetSelectedBasketItem = () => dispatch(resetSelectedItem(null));
  useEffect(() => {
    idUser && setBasket(idUser).then(() => writeIdBasket(idUser));
  }, []);

  return {
    userBasket,
    idBasket,
    quantityInBasket,
    selectedItem,
    setBasket,
    addToBasket,
    writeIdBasket,
    deleteItemFromBasket,
    hasItemInBasket,
    resetSelectedBasketItem,
  };
};
