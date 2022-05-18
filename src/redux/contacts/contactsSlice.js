import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContact,
  deleteContact,
} from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [postContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
  },
});
