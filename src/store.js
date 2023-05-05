import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers';
import authReducer from './slices/auth'


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});