import { combineReducers } from 'redux';
import alert from './alert';
import register from './register';
import events from './events';

export default combineReducers({
  alert,
  register,
  events
});
