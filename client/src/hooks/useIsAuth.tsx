import { useAppSelector } from '../store/hooksStore';

export const useIsAuth = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return { isAuth };
};
