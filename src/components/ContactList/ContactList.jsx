import { useContacts } from 'redux/contactsSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
  const { deleteContact, getVisibleContacts } = useContacts();
  const contacts = getVisibleContacts();
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => deleteContact(id)}
        />
      ))}
    </Contacts>
  );
};
