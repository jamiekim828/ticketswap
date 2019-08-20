import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
import axios from 'axios';
import { setAlert } from './alert';

//Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('http://localhost:5000/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//Logout (to delete jwt)
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
