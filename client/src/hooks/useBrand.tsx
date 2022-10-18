import { useCallback } from 'react';
import { getBrands, postBrand } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { setSelectedBrand } from '../store/reducers/brandsSlice';
import { typeBrand } from '../typesApp/brands';

export const useBrand = () => {
  const { brands, selectedBrand } = useAppSelector((state) => state.brands);
  const dispatch = useAppDispatch();
  const getBrandsAll = useCallback(() => dispatch(getBrands()), []);
  const selectBrand = (brand: typeBrand | null) => dispatch(setSelectedBrand(brand));
  const addBrand = (type: string) => dispatch(postBrand(type));

  return { brands, selectedBrand, getBrandsAll, selectBrand, postBrand: addBrand };
};
