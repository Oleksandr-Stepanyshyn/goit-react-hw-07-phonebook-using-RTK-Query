import PropTypes from 'prop-types';
import { Contacts, ContactItem, Button } from "./ContactList.styled"

export const ContactList = ({contacts, onDeleteContact}) => {
  return(
    <Contacts>
      {contacts.map(({id, name, number}) => (
        <ContactItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)} >Delete</Button>
        </ContactItem>
      ))}
    </Contacts>
  )
}

ContactList.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.number.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onDeleteContact: PropTypes.func.isRequired
};