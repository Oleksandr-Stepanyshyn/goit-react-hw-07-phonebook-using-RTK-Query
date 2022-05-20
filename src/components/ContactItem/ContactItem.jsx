import { useContacts } from 'Hooks/useContacts';
import { Contact, Button, Phone } from './ContactItem.styled';

export const ContactItem = () => {
  const { visibleContacts, deleteContact } = useContacts();
  return (
    <>
      {visibleContacts.map(({ id, name, phone }) => (
        <Contact key={id}>
          {name}: <Phone href={`tel: ${phone}`}>{phone}</Phone>
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </>
  );
};
