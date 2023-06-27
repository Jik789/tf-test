import { createSlice } from '@reduxjs/toolkit';
import { fetchItem } from '../actions/actions';
import { IData } from '../../utils/interfaces';

interface ISlice {
  item: IData | null;
  loading: boolean;
  error: boolean | null;
}

const initialState: ISlice = {
  item: null,
  loading: false,
  error: null,
};

export const oneItemSlice = createSlice({
  name: 'oneItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItem.pending, (state) => {
      console.log('pending');
      state.loading = true;
    });
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      console.log(action.payload);
      state.item = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchItem.rejected, (state) => {
      state.error = true;
    });
  },
});

export default oneItemSlice.reducer;
