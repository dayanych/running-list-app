import { configureStore } from '@reduxjs/toolkit';
import userSlice from 'src/store/slices/user';

export const store = configureStore({ reducer: { user: userSlice } });
