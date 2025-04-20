import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SignUser } from "../../types";

export const registerUser = createAsyncThunk(
  "getSingleProduct",
  async (user: SignUser) => {
    console.log(user);

    const filteredUser = {
      id: user.id,
      firstName: "",
      lastName: "",
      email: user.email,
      password: user.password,
      phone: "",
      birthDate: "",
      addresses: null,
      orders: null,
      wishlist: null, // Array of product IDs
      createdAt: "",
      status: "active",
      role: "user",
    };
    const response = await axios.post(
      `http://localhost:3000/users`,
      filteredUser
    );
    console.log(response);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("getSingleProduct", async () => {
  const response = await axios.get(`http://localhost:3000/users`);

  return response.data;
});
