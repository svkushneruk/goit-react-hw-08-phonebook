import instance from './auth';

const getContacts = async () => {
  const { data } = await instance.get('/contacts/');
  return data;
};

const addContact = async data => {
  const { data: result } = await instance.post('/contacts/', data);
  return result;
};

const removeContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

const contactsApi = {
  getContacts,
  addContact,
  removeContact,
};

export default contactsApi;
