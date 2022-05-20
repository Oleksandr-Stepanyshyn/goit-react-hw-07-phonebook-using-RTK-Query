import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import * as contactsOperations from 'redux/contacts/contactsOperations';

export const useContacts = () => {
  const contacts = useSelector(contactsSelectors.getItems);
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();

  const filtrate = value => dispatch(contactsActions.setFilter(value));

  const deleteContact = contactId =>
    dispatch(contactsOperations.deleteContact(contactId));

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
      ? toast.warn(`${name} is already in contacts`, {
          position: 'top-center',
          autoClose: 3000,
        })
      : dispatch(contactsOperations.postContact(contact));
  };

  return {
    filter,
    addContact,
    deleteContact,
    filtrate,
    visibleContacts,
    isLoading,
    error,
  };
};
