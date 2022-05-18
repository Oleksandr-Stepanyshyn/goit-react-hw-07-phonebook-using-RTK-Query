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
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [postContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [postContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
