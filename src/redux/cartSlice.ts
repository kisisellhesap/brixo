import { createSlice } from '@reduxjs/toolkit';
import {
  addToCart,
  decreaseAmount,
  deleteToAllCart,
  deleteToCart,
  fromPrivateCartToGeneralCart,
  getProductsfromCart,
  increaseAmount,
} from './actions/cartActions';
import type { ProductWithAmount } from '../types';

interface ProductSlice {
  cartProducts: ProductWithAmount[];
  loading: boolean;
  error: string | undefined;
}

const initialState: ProductSlice = {
  cartProducts: [],
  loading: true,
  error: undefined,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsfromCart.fulfilled, (state, action) => {
        state.cartProducts = action.payload;
        state.error = undefined;
        state.loading = false;
      })
      .addCase(getProductsfromCart.rejected, (state, action) => {
        state.cartProducts = [];
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getProductsfromCart.pending, (state) => {
        state.cartProducts = [];
        state.loading = true;
        state.error = undefined;
      })
      .addCase(increaseAmount.fulfilled, (state, action) => {
        console.log(action.payload.amount);
        if (action.payload.amount <= action.payload.stock) {
          state.cartProducts = state.cartProducts.map((item) =>
            item.id === action.payload.id ? action.payload : item,
          );
        }
      })
      .addCase(decreaseAmount.fulfilled, (state, action) => {
        console.log(action.payload.amount);
        if (action.payload.amount > 0) {
          state.cartProducts = state.cartProducts.map((item) =>
            item.id === action.payload.id ? action.payload : item,
          );
        }
      })

      .addCase(deleteToCart.fulfilled, (state, action) => {
        state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
      })

      .addCase(deleteToAllCart.fulfilled, (state, action) => {
        state.cartProducts = action.payload;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartProducts = [...state.cartProducts, action.payload];
      })
      .addCase(fromPrivateCartToGeneralCart.fulfilled, (state, action) => {
        state.cartProducts = action.payload;
      });
  },
});

export default cartSlice.reducer;
