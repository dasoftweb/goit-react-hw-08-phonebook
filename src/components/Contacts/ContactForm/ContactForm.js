import { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contacts-operations';
import contactsSelectors from '../../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: this.capitalizeFirstLetter(value) });
  };

  capitalizeFirstLetter = string => {
    return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { items, onSubmit } = this.props;

    if (items.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(`Name ${name} is already in contacts`);
    }
    if (
      items.some(item => item.number.toLowerCase() === number.toLowerCase())
    ) {
      return alert(`Number ${number} is already in contacts`);
    }

    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state; 
    return (
      <form onSubmit={this.handleSubmit} className="form form-wide">
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className="label">
          Phone
          <input
            className="input"
            type="tel"
            value={number}
            onChange={this.handleChange}
            name="number"
            required
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: contactsSelectors.getContactItems(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
