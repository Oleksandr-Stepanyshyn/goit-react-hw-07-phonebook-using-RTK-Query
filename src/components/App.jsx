import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook, Title, ContactsTitle } from './App.styled';

export const App = () => {
  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </PhoneBook>
  );
};
