import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook, Title, ContactsTitle } from './App.styled';

import { useContacts } from 'redux/contactsSlice';

export const App = () => {
  const { contacts, filter, setContact, deleteContact, filtrate } =
    useContacts();

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

  const handleDelete = contactId => {
    deleteContact(contactId);
  };

  const handleNameChange = e => {
    filtrate(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    console.log(filter);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={handleNameChange} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={handleDelete}
      />
    </PhoneBook>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// ContactList.protoTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
