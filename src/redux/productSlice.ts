import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProducts } from "./actions/getAllProducts";
import { Product } from "../types";

interface ProductSlice {
  products: Product[];
  loading: boolean;
  error: string | undefined;
}

const initialState: ProductSlice = {
  products: [],
  loading: false,
  error: undefined,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.loading = false;
        state.error = undefined;
      }
    );
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.products = [];
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getAllProducts.pending, (state) => {
      state.products = [];
      state.loading = true;
      state.error = undefined;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
