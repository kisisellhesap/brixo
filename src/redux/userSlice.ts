import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

interface ProductSlice {
  users: User[];
  loading: boolean;
  error: string | undefined;
}

const initialState: ProductSlice = {
  users: [],
  loading: true,
  error: undefined,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
