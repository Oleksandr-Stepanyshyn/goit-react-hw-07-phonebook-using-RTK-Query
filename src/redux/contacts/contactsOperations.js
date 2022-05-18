import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phoneBookApi from 'services/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phoneBookApi.fetch();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await phoneBookApi.post(contact);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await phoneBookApi.del(contactId);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
