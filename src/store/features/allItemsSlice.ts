import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchAllItems } from '../actions/actions';
import { IData } from '../../utils/interfaces';

interface ISlice {
  items: IData[];
  baseItems: IData[];
  loading: boolean;
  error: boolean | null;
}

const initialState: ISlice = {
  items: [],
  baseItems: [],
  loading: false,
  error: null,
};

export const allItemsSlice = createSlice({
  name: 'allItem',
  initialState,
  reducers: {
    searchItems: (state, action: PayloadAction<string>) => {
      state.items = state.baseItems.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.baseItems = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllItems.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { searchItems } = allItemsSlice.actions;

export default allItemsSlice.reducer;
