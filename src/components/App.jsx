import PropTypes from 'prop-types';
import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { PhoneBook, Title, ContactsTitle } from "./App.styled";


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    const currentName = name;
    const matchName = this.state.contacts.some(({name}) => name===currentName);

    matchName 
      ? alert(`${name} is already in contacts`)
      : this.setState(({contacts}) => ({contacts: [contact, ...contacts]}))

    

  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== contactId),
    }))
  }

  handleNameChange = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) => (name.toLowerCase().includes(normalizedFilter)))
  }

  render () {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <PhoneBook>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact}/>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter 
            value={filter}
            onChange={this.handleNameChange}/>
        <ContactList 
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
        />
      </PhoneBook>
    )
  }
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

ContactList.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onDeleteContact: PropTypes.func.isRequired
};
