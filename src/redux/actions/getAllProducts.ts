import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products");

  const data = response.data.products;
  console.log(data);

  return data;
});
