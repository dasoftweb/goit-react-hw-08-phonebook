import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
