import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProducts } from "./actions/getAllProducts";
import { Product } from "../types";
import { getSingleProduct } from "./actions/getSingleProduct";

interface ProductSlice {
  products: Product[];
  singleProduct: Product | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: ProductSlice = {
  products: [],
  singleProduct: null,
  loading: true,
  error: undefined,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSingleProduct: (state) => {
      state.singleProduct = null;
    },
  },
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

    builder.addCase(
      getSingleProduct.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.singleProduct = action.payload;
        state.loading = false;
        state.error = undefined;
      }
    );
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.singleProduct = null;
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getSingleProduct.pending, (state) => {
      state.singleProduct = null;
      state.loading = true;
      state.error = undefined;
    });
  },
});

export const { clearSingleProduct } = productSlice.actions;
export default productSlice.reducer;
