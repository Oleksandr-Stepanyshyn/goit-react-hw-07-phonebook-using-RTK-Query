import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  deleteItem,
  setFilter,
  getItems,
  getFilter,
} from '../redux/contactsSlice';

export const useContacts = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setContact = contact => dispatch(addItem(contact));
  const deleteContact = contactId => dispatch(deleteItem(contactId));
  const filtrate = value => dispatch(setFilter(value));

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName
    );

    matchName ? alert(`${name} is already in contacts`) : setContact(contact);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return {
    filter,
    addContact,
    deleteContact,
    filtrate,
    getVisibleContacts,
  };
};
