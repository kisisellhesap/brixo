import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { SignUser, User } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

// POST

export const registerUser = createAsyncThunk('registerUser', async (user: SignUser) => {
  const filteredUser = {
    id: uuidv4(),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: '',
    birthDate: '',
    addresses: null,
    orders: null,
    myCart: null,
    wishlist: null,
    createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
    status: 'active',
    role: 'user',
  };
  const res = await axios.post(`http://localhost:3000/users`, filteredUser);

  return res.data;
});

export const loginUser = createAsyncThunk('loginUser', async (user: User | undefined) => {
  const res = await axios.post(`http://localhost:3000/currentUser`, user);

  return res.data;
});

// GET

export const getUsers = createAsyncThunk('getUsers', async () => {
  const response = await axios.get(`http://localhost:3000/users`);
  return response.data;
});

export const getCurrentUser = createAsyncThunk('getCurrentUser', async () => {
  const response = await axios.get(`http://localhost:3000/currentUser`);

  return response.data[0];
});

export const getQuestUser = createAsyncThunk('getQuestUser', async () => {
  const res = await axios.get(`http://localhost:3000/questUser`);

  return res.data[0];
});

// DELETE

export const logoutUser = createAsyncThunk('logoutUser', async (id: string | undefined) => {
  await axios.delete(`http://localhost:3000/currentUser/${id}`);

  return id;
});

// UPDATE

export const fromGeneralCartToPrivateCart = createAsyncThunk(
  'fromGeneralCartToPrivateCart',
  async (updateCartUser: User) => {
    const res = await axios.put(`http://localhost:3000/users/${updateCartUser.id}`, updateCartUser);

    return res.data;
  },
);

export const updateInformationUser = createAsyncThunk(
  'updateInformationUser',
  async (user: User) => {
    const res = await axios.put(`http://localhost:3000/users/${user.id}`, user);

    const res1 = await axios.put(`http://localhost:3000/currentUser/${user.id}`, user);

    console.log(res.data, 'res.data');
    console.log(res1.data, 'res1.data');
    return res.data;
  },
);

export const updateOrderUser = createAsyncThunk('updateOrderUser', async (user: User) => {
  const res = await axios.put(`http://localhost:3000/users/${user.id}`, user);
  const res1 = await axios.put(`http://localhost:3000/currentUser/${user.id}`, user); // Burası eksikti

  return res1.data;
});
