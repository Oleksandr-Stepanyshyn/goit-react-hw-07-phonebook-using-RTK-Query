import { configureStore } from '@reduxjs/toolkit';
import combineReducer from './combineReducer';
import { contactsApi } from './contacts/contactsApi';

export const store = configureStore({
  reducer: combineReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
