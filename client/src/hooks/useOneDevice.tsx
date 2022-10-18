import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { useParams } from 'react-router-dom';
import { getOneDevice } from '../store/actionCreators/actionCreator';
import { useEffect } from 'react';

export const useOneDevice = () => {
  const { selectedType } = useAppSelector((state) => state.types);
  const { selectedBrand } = useAppSelector((state) => state.brands);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { devices } = useAppSelector((state) => state.devices);
  const setDevice = (idDevice: number) => dispatch(getOneDevice(idDevice));

  useEffect(() => {
    id && setDevice(+id!);
  }, [selectedType, selectedBrand]);

  return { device: devices[0], setDevice };
};
