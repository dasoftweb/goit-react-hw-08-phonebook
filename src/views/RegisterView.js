import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="label">
          Name
          <input
            className="input"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className="label">
          E-mail
          <input
            className="input"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className="button" type="submit">
          Register
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
