import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import eventReducer from './event/eventSlice';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

// selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
