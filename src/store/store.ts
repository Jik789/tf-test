import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import allItemsSlice from './features/allItemsSlice';
import inputNameSlice from './features/inputNameSlice';
import oneItemSlice from './features/oneItemSlice';

export const store = configureStore({
  reducer: {
    allItems: allItemsSlice,
    inputName: inputNameSlice,
    oneItem: oneItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
