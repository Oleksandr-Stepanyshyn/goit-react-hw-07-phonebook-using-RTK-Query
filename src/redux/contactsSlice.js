import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
  // blacklist: ['filter'],
};

// Redusers
const contactsReducer = contactsSlice.reducer;

// PersistRedocer
export const persistedContactsReduser = persistReducer(
  persistConfig,
  contactsReducer
);

// Actions
export const { addItem, deleteItem, setFilter } = contactsSlice.actions;

// Selectors
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
