import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

const items = createReducer(initialState.contacts, {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer(initialState.filter, {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const onError = (_, { payload }) => payload;

const error = createReducer(initialState.error, {
  [contactsActions.fetchContactsError]: onError,
  [contactsActions.addContactError]: onError,
  [contactsActions.deleteContactError]: onError,
  [contactsActions.clearError]: () => null,
});

const loading = createReducer(initialState.loading, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
