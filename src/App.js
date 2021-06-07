import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import Loader from './components/Loader/Loader';
// Routes
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// Components
import Container from './components/Container';
import AppBar from './components/AppBar';
// Views
const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "Home" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "Contacts" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "Register" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "Login" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <Suspense fallback={<Loader />}>
          <AppBar />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
