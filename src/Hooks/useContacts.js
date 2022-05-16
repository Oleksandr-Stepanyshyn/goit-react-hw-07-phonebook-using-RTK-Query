import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';

export const useContacts = () => {
  const contacts = useSelector(contactsSelectors.getItems);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const setContact = contact => dispatch(contactsActions.addItem(contact));
  const deleteContact = contactId =>
    dispatch(contactsActions.deleteItem(contactId));
  const filtrate = value => dispatch(contactsActions.setFilter(value));

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
