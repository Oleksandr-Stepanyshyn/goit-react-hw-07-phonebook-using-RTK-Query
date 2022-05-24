import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions, filterSelectors } from 'redux/filter';
import {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';

export const useContacts = () => {
  const filter = useSelector(filterSelectors.getFilter);
  const {
    data: contacts,
    isLoading: isFetchLoading,
    fetchError,
  } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const dispatch = useDispatch();

  const filtrate = value => dispatch(filterActions.setFilter(value));

  function setContact(name, phone) {
    const contact = {
      name,
      phone,
    };

    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName
    );

    if (matchName) {
      toast.warn(`${name} is already in contacts`, {
        position: 'top-center',
        autoClose: 3000,
      });
    } else {
      addContact(contact);
      toast.success('contact added');
    }
  }

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return {
    filter,
    setContact,
    deleteContact,
    filtrate,
    visibleContacts,
    isFetchLoading,
    fetchError,
  };
};
