import { useContacts } from 'Hooks/useContacts';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts, Div } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';

export const ContactList = () => {
  const { deleteContact, getVisibleContacts, isLoading } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = getVisibleContacts();
  return (
    <Div>
      <Contacts>
        {contacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            name={name}
            number={phone}
            onDeleteContact={() => deleteContact(id)}
          />
        ))}
      </Contacts>
      {isLoading && <Loader />}
    </Div>
  );
};
