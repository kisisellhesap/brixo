import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../types';
import {
  fromGeneralCartToPrivateCart,
  getCurrentUser,
  getUsers,
  loginUser,
  logoutUser,
  registerUser,
  updateInformationUser,
  updateOrderUser,
} from './actions/userActions';

interface ProductSlice {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: ProductSlice = {
  users: [],
  currentUser: null,
  loading: true,
  error: undefined,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Kayıt başarısız';
      })

      .addCase(getCurrentUser.pending, (state) => {
        state.currentUser = null;
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload];
        state.loading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Aktif Kullanıcı yok';
      })

      .addCase(fromGeneralCartToPrivateCart.fulfilled, (state, action) => {
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
        state.loading = false;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.loading = false;
      })

      .addCase(updateOrderUser.fulfilled, (state, action) => {
        console.log(action.payload, 'action.payload');

        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
        state.loading = false;
      })
      .addCase(updateInformationUser.fulfilled, (state, action) => {
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
        state.loading = false;
      });
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
