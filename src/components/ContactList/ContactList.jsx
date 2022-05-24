// import { useContacts } from 'Hooks/useContacts';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts, Div } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const ContactList = () => {
  // const {
  //   visibleContacts: contacts,
  //   isFetchLoading,
  //   fetchError,
  // } = useContacts();
  const { data: contacts, isLoading, error } = useGetContactsQuery();

  return (
    <Div>
      {error && (
        <h1>
          Something went wrong "status: {error?.originalStatus}", reload the
          page
        </h1>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <Contacts>
          <ContactItem
          // contacts={contacts}
          />
        </Contacts>
      )}
    </Div>
  );
};
