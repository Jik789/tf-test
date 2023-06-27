import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface inputRepoState {
  inputName: string;
}

const initialState: inputRepoState = {
  inputName: '',
};

export const inputNameSlice = createSlice({
  name: 'inputName',
  initialState,
  reducers: {
    inputWrite: (state, action: PayloadAction<string>) => {
      state.inputName = action.payload;
    },
  },
});

export const { inputWrite } = inputNameSlice.actions;

export default inputNameSlice.reducer;
