import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice';

// Redusers
const contactsReducer = contactsSlice.reducer;

// Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
  // blacklist: ['filter'],
};

// PersistReducer
export const persistedContactsReduser = persistReducer(
  persistConfig,
  contactsReducer
);
