import { createReducer } from '@reduxjs/toolkit';

import actions from './contacts-actions';

const initialState = {
  items: [{ id: '1', name: 'Alex', number: '1234567' }],
  loading: false,
  error: null,
};

const contactsReducer = createReducer(initialState, {
  [actions.fetchContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [actions.fetchContactsSuccess]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
  },
  [actions.fetchContactsError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
  [actions.addContactLoading]: (store, { payload }) => {
    store.loading = true;
    store.error = null;
  },
  [actions.addContactSuccess]: (store, { payload }) => ({
    ...store,
    items: [...store.items, payload],
  }),
  [actions.addContactError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },

  [actions.removeContactLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [actions.removeContactSuccess]: (store, { payload }) => {
    const newContacts = store.items.filter(({ id }) => id !== payload);
    return { ...store, items: newContacts };
  },
  [actions.removeContactError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },
});

export default contactsReducer;
