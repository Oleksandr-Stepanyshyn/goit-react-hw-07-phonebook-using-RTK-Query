// import PropTypes from 'prop-types';
import { useContacts } from 'Hooks/useContacts';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Contact, Button, Phone } from './ContactItem.styled';

export const ContactItem = () => {
  const { visibleContacts } = useContacts();
  const [deleteContact] = useDeleteContactMutation();
  const contacts = visibleContacts();

  return (
    <>
      {contacts.map(({ id, name, phone }) => (
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

// ContactItem.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
