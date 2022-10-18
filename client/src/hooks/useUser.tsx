import { loginUser, postUser } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { unLogin } from '../store/reducers/userSlice';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const { loading, id } = useAppSelector((state) => state.user);
  const createUser = (data: { email: string; password: string }) => dispatch(postUser(data));
  const logOutUser = () => dispatch(unLogin());
  const entryUser = (data: { email: string; password: string }) => dispatch(loginUser(data));

  return {
    loadingUser: loading,
    createUser,
    logOutUser,
    entryUser,
    idUser: id,
  };
};
