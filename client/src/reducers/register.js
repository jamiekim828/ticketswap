import { REGISTER_SUCCESS, REGISTER_FAIL, GET_JWT } from '../actions/register';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token');
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case GET_JWT:
      return localStorage.getItem('token');

    default:
      return state;
  }
}
