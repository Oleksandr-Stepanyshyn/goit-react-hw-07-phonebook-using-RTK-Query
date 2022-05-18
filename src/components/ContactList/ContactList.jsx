import { useContacts } from 'Hooks/useContacts';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
  const { deleteContact, getVisibleContacts } = useContacts();
  const contacts = getVisibleContacts();
  return (
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
  );
};
