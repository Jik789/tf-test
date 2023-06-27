import { createAsyncThunk } from '@reduxjs/toolkit';
import { DATA_ADRESS } from '../../utils/const';

export const fetchAllItems = createAsyncThunk('items/fetchAllitems', async () => {
  try {
    return await fetch(DATA_ADRESS).then((res) => res.json());
  } catch (error) {
    return new Error();
  }
});

export const fetchItem = createAsyncThunk('items/fetchitem', async (id: string | null) => {
  return await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
});
