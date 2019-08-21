import { combineReducers } from 'redux';
import alert from './alert';
import register from './register';
import events from './events';
import tickets from './tickets';

export default combineReducers({
  alert,
  register,
  events,
  tickets
});
