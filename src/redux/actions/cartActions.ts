import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Product, ProductWithAmount, User } from '../../types';

export const addToCart = createAsyncThunk('addToCart', async (singleProduct: Product) => {
  const cardProduct = { ...singleProduct, amount: 1 };

  const res = await axios.post(`http://localhost:3000/cart`, cardProduct);

  return res.data;
});

export const deleteToCart = createAsyncThunk('deleteToCart', async (singleProduct: Product) => {
  const res = await axios.delete(`http://localhost:3000/cart/${singleProduct.id}`);
  return res.data;
});

export const deleteToAllCart = createAsyncThunk('deleteToAllCart', async () => {
  let res = await axios.get('http://localhost:3000/cart');
  const cartItems = res.data;

  for (const item of cartItems) {
    await axios.delete(`http://localhost:3000/cart/${item.id}`);
    console.log(`Silindi: ${item.id}`);
  }

  res = await axios.get('http://localhost:3000/cart');

  return res.data;
});

export const increaseAmount = createAsyncThunk(
  'increaseAmount',
  async (filteredProduct: ProductWithAmount) => {
    const cardProduct = {
      ...filteredProduct,
      amount: filteredProduct.amount + 1,
    };

    const res = await axios.put(`http://localhost:3000/cart/${filteredProduct.id}`, cardProduct);

    return res.data;
  },
);

export const decreaseAmount = createAsyncThunk(
  'decreaseAmount',
  async (filteredProduct: ProductWithAmount | undefined) => {
    if (filteredProduct) {
      const cardProduct = {
        ...filteredProduct,
        amount: filteredProduct.amount - 1,
      };

      const res = await axios.put(`http://localhost:3000/cart/${filteredProduct.id}`, cardProduct);

      return res.data;
    }
  },
);

export const getProductsfromCart = createAsyncThunk('getProductsfromCart', async () => {
  const response = await axios.get('http://localhost:3000/cart');

  return response.data;
});

export const fromPrivateCartToGeneralCart = createAsyncThunk(
  'fromPrivateCartToGeneralCart',
  async (currentfiltered: User) => {
    if (currentfiltered.myCart) {
      for (const item of currentfiltered.myCart) {
        await axios.post('http://localhost:3000/cart', item);
      }
    }

    const res = await axios.get('http://localhost:3000/cart');

    return res.data;
  },
);
