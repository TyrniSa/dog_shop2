import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import cartReducer from './slices/cartRedux';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartReducer
  },
});
