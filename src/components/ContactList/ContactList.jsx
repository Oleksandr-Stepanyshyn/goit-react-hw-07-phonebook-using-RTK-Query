import { useContacts } from 'Hooks/useContacts';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts, Div } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';

export const ContactList = () => {
  const { isLoading, error } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      {error ? (
        <h1>Something went wrong "{error?.message}", reload the page </h1>
      ) : (
        <Contacts>
          <ContactItem />
        </Contacts>
      )}
      {isLoading && <Loader />}
    </Div>
  );
};
