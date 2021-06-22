import { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';
// Components
import Loader from '../components/Loader';
import ContactForm from '../components/Contacts/ContactForm/ContactForm';
import ContactList from '../components/Contacts/ContactList/ContactList';
import Filter from '../components/Contacts/Filter/Filter';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="Contacts">
        <ContactForm />
        <h2 className="Contacts_title">Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <Loader />}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);