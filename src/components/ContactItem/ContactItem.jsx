// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';

import { removeContact } from '../../redux/contacts/contacts-operations';

import css from 'components/ContactItem/ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const demoveContact = contactId => {
    dispatch(removeContact(contactId));
  };
  return (
    <li className={css.list__item}>
      <p className={css.list__text}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.list__btn}
        onClick={() => demoveContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
