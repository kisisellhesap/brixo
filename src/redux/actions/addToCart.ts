import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductWithAmount } from "../../types";

export const addToCart = createAsyncThunk<ProductWithAmount, Product | null>(
  "addToCart",
  async (singleProduct, thunkAPI) => {
    if (!singleProduct) {
      return thunkAPI.rejectWithValue("Ürün bulunamadı") as never;
    }

    const cardProduct = { ...singleProduct, amount: 1 };

    const response = await axios.post(
      `http://localhost:3000/cart`,
      cardProduct
    );

    return cardProduct as ProductWithAmount;
  }
);
