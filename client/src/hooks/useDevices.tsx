import { useEffect } from 'react';
import { getDevices, postDevice } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';

export const useDevices = () => {
  const { devices, loading } = useAppSelector((state) => state.devices);
  const { selectedType } = useAppSelector((state) => state.types);
  const { selectedBrand } = useAppSelector((state) => state.brands);
  const dispatch = useAppDispatch();
  const createDevice = (formData: any) => dispatch(postDevice(formData));

  useEffect(() => {
    dispatch(getDevices({ typeId: `${selectedType?.id}`, brandId: `${selectedBrand?.id}` }));
  }, [selectedType, selectedBrand]);

  return { loadDevices: loading, devices, createDevice };
};
