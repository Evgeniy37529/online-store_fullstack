import { getTypes, postType } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { setSelectedType } from '../store/reducers/typeSlice';
import { typeType } from '../typesApp/types';

export const useTypesDevice = () => {
  const { types, selectedType } = useAppSelector((state) => state.types);
  const dispatch = useAppDispatch();
  const getTypesDevices = () => dispatch(getTypes());
  const selectType = (type: typeType | null) => dispatch(setSelectedType(type));
  const addType = (type: string) => dispatch(postType(type));

  return { types, selectedType, getTypesDevices, selectType, postType: addType };
};
