// import request from 'superagent';
import axios from 'axios';

import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';

//Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('http://localhost:5000/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// export const registerSuccess = login => {
//   return {
//     type: REGISTER_SUCCESS,
//     payload: login
//   };
// };
// export const registerFail = error => {
//   return {
//     type: REGISTER_FAIL,
//     payload: error
//   };
// };
// export const onLoadJWT = jwt => {
//   return {
//     type: GET_JWT,
//     payload: jwt
//   };
// };

// const baseUrl = 'http://localhost:5000';

// export const register = (name, email, password) => dispatch => {
//   request
//     .post(`${baseUrl}/users`)
//     .send({ name, email, password })
//     .then(
//       res => {
//         console.log('res.body', res.body);
//         console.log('token is:', res.body.jwt);
//         localStorage.setItem('token', res.body.jwt);
//         dispatch(registerSuccess(res));
//       },
//       err => {
//         console.log('err', err);
//         dispatch(registerFail(err));
//       }
//     );
// };
