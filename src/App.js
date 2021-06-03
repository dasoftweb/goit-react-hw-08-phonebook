import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import contactsOpertations from './redux/contacts/contacts-operations';
import contactsSelectors from './redux/contacts/contacts-selectors';
// Components
import Container from './components/Container';
import AppBar from './components/AppBar'
// Views
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    );
  }
}

export default App;
