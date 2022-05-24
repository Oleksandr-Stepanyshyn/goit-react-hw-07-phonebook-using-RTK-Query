import { combineReducers } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';
import { filterReducer } from './filter';

export default combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterReducer.reducer,
});
