import { nanoid } from 'nanoid';
import { useContacts } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook, Title, ContactsTitle } from './App.styled';

export const App = () => {
  const { contacts, filter, setContact } = useContacts();

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

  const getVisibleContacts = () => {
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
      <Filter value={filter} />
      <ContactList contacts={getVisibleContacts()} />
    </PhoneBook>
  );
};
