import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts } from "./ContactList.styled"

export const ContactList = ({contacts, onDeleteContact}) => {
  return(
    <Contacts>
      {contacts.map(({id, name, number}) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </Contacts>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onDeleteContact: PropTypes.func.isRequired
};