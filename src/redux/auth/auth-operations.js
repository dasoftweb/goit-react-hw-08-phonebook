import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    dispatch(authActions.registerSuccess(response.data));
    console.log(credentials);
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    dispatch(authActions.loginSuccess(response.data));
    console.log(credentials);
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = credentials => async dispatch => {};

const getCurrentUser = credentials => async dispatch => {};

export default { register, logIn, logOut, getCurrentUser };
