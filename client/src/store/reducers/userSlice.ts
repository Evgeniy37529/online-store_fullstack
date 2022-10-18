import { createSlice } from '@reduxjs/toolkit';
import { postUser, loginUser, checkUser } from '../actionCreators/actionCreator';
import { IState, decodeUser } from '../../typesApp/user';

const initialState: IState = {
  isAuth: false,
  role: 'USER',
  email: '',
  id: null,
  error: '',
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError: (state: IState, action: { payload: string }) => {
      state.error = action.payload;
    },
    unLogin: (state: IState) => {
      localStorage.removeItem('token');
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending.type, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postUser.fulfilled.type,
      (state: IState, action: { type: string; payload: decodeUser }) => {
        state.id = action.payload.id;
        state.role = action.payload?.role;
        state.email = action.payload.email;
        state.isAuth = true;
        state.error = '';
        state.loading = true;
      }
    );
    builder.addCase(
      postUser.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.error = action.payload;
        state.isAuth = false;
      }
    );
    builder.addCase(loginUser.pending.type, (state) => {
      state.loading = false;
    });
    builder.addCase(
      loginUser.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.error = action.payload;
        state.isAuth = false;
      }
    );
    builder.addCase(
      loginUser.fulfilled.type,
      (state: IState, action: { type: string; payload: decodeUser }) => {
        state.id = action.payload.id;
        state.role = action.payload?.role;
        state.email = action.payload.email;
        state.isAuth = true;
        state.error = '';
        state.loading = false;
      }
    );
    builder.addCase(
      checkUser.fulfilled.type,
      (state: IState, action: { type: string; payload: decodeUser }) => {
        state.id = action.payload.id;
        state.role = action.payload?.role;
        state.email = action.payload.email;
        state.isAuth = true;
        state.error = '';
        state.loading = false;
      }
    );
  },
});

export const { unLogin, setError } = userSlice.actions;
export default userSlice.reducer;
