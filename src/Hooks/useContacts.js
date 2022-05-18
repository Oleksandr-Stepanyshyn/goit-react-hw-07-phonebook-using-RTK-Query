import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import * as contactsOperations from 'redux/contacts/contactsOperations';

export const useContacts = () => {
  const contacts = useSelector(contactsSelectors.getItems);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const deleteContact = contactId =>
    dispatch(contactsOperations.deleteContact(contactId));
  const filtrate = value => dispatch(contactsActions.setFilter(value));

  const addContact = (name, phone) => {
    const contact = {
      name,
      phone,
    };

    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName
    );

    matchName
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.postContact(contact));
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
