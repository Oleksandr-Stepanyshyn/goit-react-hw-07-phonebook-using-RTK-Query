import { useContacts } from 'Hooks/useContacts';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const { deleteContact, getVisibleContacts, isLoading } = useContacts();
  const contacts = getVisibleContacts();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
