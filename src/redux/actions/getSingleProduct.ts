import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id: string | undefined) => {
    await new Promise((resolve) => setTimeout(resolve, 700));

    const response = await axios.get(`http://localhost:3000/products/${id}`);

    return response.data;
  }
);
