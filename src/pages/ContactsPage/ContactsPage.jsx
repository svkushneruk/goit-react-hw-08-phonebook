import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterValue } from 'redux/filter/filter-actions';
import { getFilterValue } from 'redux/filter/filter-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from 'components/App.module.css';
import { fetchContacts, addContact } from 'redux/contacts/contacts-operations';

import { Section, PageTitle } from './ContactsPage.styled';

const ContactsPage = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = payload => {
    if (checkName(payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(payload));
    }
  };

  const removeContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const onChangeFilterValue = e => {
    const { value } = e.target;
    dispatch(changeFilterValue(value));
  };

  const checkName = filterName => {
    const arr = contacts.filter(({ name }) => name === filterName);
    if (arr.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <Section className={css.app}>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>

      <Filter filterValue={filter} onChange={onChangeFilterValue} />

      {contacts && (
        <ContactList contacts={contacts} onDeleteContact={removeContact} />
      )}
    </Section>
  );
};

export default ContactsPage;
