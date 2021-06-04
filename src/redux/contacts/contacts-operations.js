import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(contactsActions.addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContact };
