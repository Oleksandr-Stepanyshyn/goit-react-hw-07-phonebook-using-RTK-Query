import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
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
      state.items.unshift(action.payload);
    },
    deleteItem(state, action) {
      return state.items.filter(({ id }) => id !== action.payload);
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
  // whitelist: ['items'],
  // blacklist: ['filter'],
};

// Redusers
export const contactsReducer = contactsSlice.reducer;

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

// Hook
export const useContacts = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setContact = contact => dispatch(addItem(contact));
  const deleteContact = contactId => dispatch(deleteItem(contactId));
  const filtrate = value => dispatch(setFilter(value));

  return {
    contacts,
    filter,
    setContact,
    deleteContact,
    filtrate,
  };
};
