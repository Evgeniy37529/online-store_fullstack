import { configureStore } from '@reduxjs/toolkit';
import typesReducer from './reducers/typeSlice';
import brandsReucer from './reducers/brandsSlice';
import deviceReducer from './reducers/devicesSlice';
import userReducer from './reducers/userSlice';
import basketReducer from './reducers/basketSlice';

export const store = configureStore({
  reducer: {
    types: typesReducer,
    brands: brandsReucer,
    devices: deviceReducer,
    user: userReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
