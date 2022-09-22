import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => (
  <List>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
