import request from 'superagent';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const GET_JWT = 'GET_JWT';

export const registerSuccess = login => {
  return {
    type: REGISTER_SUCCESS,
    payload: login
  };
};
export const registerFail = error => {
  return {
    type: REGISTER_FAIL,
    payload: error
  };
};
export const onLoadJWT = jwt => {
  return {
    type: GET_JWT,
    payload: jwt
  };
};

const baseUrl = 'http://localhost:5000';

export const register = (name, email, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ name, email, password })
    .then(
      res => {
        console.log('res.body', res.body);
        console.log('token is:', res.body.jwt);
        localStorage.setItem('token', res.body.jwt);
        dispatch(registerSuccess(res));
      },
      err => {
        console.log('err', err);
        dispatch(registerFail(err));
      }
    );
};
