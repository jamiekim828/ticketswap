import { combineReducers } from 'redux';
import alert from './alert';
import register from './register';
import events from './events';
import tickets from './tickets';
import comments from './comments';

export default combineReducers({
  alert,
  register,
  events,
  tickets,
  comments
});
