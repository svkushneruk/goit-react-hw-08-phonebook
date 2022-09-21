import contactsApi from 'shared/api/contacts';
import actions from './contacts-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await contactsApi.getContacts();
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      const { message } = error;
      dispatch(actions.fetchContactsError(message));
    }
  };

  return func;
};

const isDublicate = ({ name, number }, contacts) => {
  const normalizedName = name.toLowerCase();
  const result = contacts.find(contact => {
    return (
      normalizedName === contact.name.toLowerCase() && number === contact.number
    );
  });

  return Boolean(result);
};

export const addContact = data => {
  const func = async (dispatch, getState) => {
    const { contacts } = getState();
    if (isDublicate(data, contacts.items)) {
      return alert(`${data.name} ${data.number} is already exist`);
    }
    try {
      dispatch(actions.addContactLoading());
      const result = await contactsApi.addContact(data);
      dispatch(actions.addContactSuccess(result));
    } catch (error) {
      const { message } = error;
      dispatch(actions.addContactError(message));
    }
  };

  return func;
};

export const removeContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.removeContactLoading());
      await contactsApi.removeContact(id);
      dispatch(actions.removeContactSuccess(id));
    } catch (error) {
      const { message } = error;
      dispatch(actions.removeContactError(message));
    }
  };

  return func;
};
