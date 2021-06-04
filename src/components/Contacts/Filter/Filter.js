import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../../redux/contacts/contacts-actions';
import contactsSelectors from '../../../redux/contacts/contacts-selectors';

const Filter = ({ value, onChange }) => (
  <label className="label">
    Find contacts by name
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
