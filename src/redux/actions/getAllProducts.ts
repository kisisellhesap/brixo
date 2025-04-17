import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  await new Promise((resolve) => setTimeout(resolve, 700));

  const response = await axios.get("http://localhost:3000/products");

  return response.data;
});
