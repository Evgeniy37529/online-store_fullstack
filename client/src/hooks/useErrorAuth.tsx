import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { setError } from '../store/reducers/userSlice';

export const useErrorAuth = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.user);
  const fetchError = (error: string) => dispatch(setError(error));

  return { error, fetchError };
};
