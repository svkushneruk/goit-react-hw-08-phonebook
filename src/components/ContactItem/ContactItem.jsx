// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';

import { removeContact } from '../../redux/contacts/contacts-operations';

import { ListItem, ListGroup, ListBtn } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const demoveContact = contactId => {
    dispatch(removeContact(contactId));
  };
  return (
    <ListItem>
      <ListGroup>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </ListGroup>
      <ListBtn onClick={() => demoveContact(contact.id)}>Delete</ListBtn>
    </ListItem>
  );
};

export default ContactItem;
