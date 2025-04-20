import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductWithAmount } from "../types";
import { addToCart } from "./actions/addToCart";

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
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addToCart.fulfilled,
      (state, action: PayloadAction<ProductWithAmount>) => {
        state.cartProducts.push(action.payload);
        state.error = undefined;
        state.loading = false;
      }
    );
    builder.addCase(addToCart.rejected, (state, action) => {
      state.cartProducts = [];
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(addToCart.pending, (state) => {
      state.cartProducts = [];
      state.loading = true;
      state.error = undefined;
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
