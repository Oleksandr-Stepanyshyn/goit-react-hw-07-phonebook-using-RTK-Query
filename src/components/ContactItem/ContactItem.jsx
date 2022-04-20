import PropTypes from 'prop-types';
import { Contact, Button } from "./ContactItem.styled"

export const ContactItem = ({name, number, onDeleteContact}) => {
  return(
    <Contact>
      {name}: {number}
      <Button type="button" onClick={onDeleteContact} >Delete</Button>
    </Contact>
  )
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}