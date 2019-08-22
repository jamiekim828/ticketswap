import { UPLOAD_EVENT, GET_ALL_EVENTS, GET_ONE_EVENT } from './types';
import request from 'superagent';

//CREATE EVENT
export function uploadEvent(event) {
  return {
    type: UPLOAD_EVENT,
    payload: event
  };
}

export const saveEvent = data => (dispatch, getState) => {
  const token = getState();
  console.log('token', token);

  request
    .post('http://localhost:5000/events')
    .set('Authorization', 'Bearer ' + getState().register.jwt)
    .send(data)
    .then(res => {
      return res;
    })
    .then(data => dispatch(uploadEvent(data.body)))
    .catch(err => console.log(err));
};

//GET ALL THE CURRENT EVENTS
export function getAllEvents(events) {
  return {
    type: GET_ALL_EVENTS,
    payload: events
  };
}

export function fetchEvents(offset, limit) {
  return dispatch => {
    request
      .get('http://localhost:5000/events?offset=' + offset + '&limit=' + limit)
      .then(res => {
        console.log('res', res.body.events);
        return res.body.events;
      })
      .then(data => {
        dispatch(getAllEvents(data));
      })
      .catch(err => console.log('error getting events', err));
  };
}

//GET ONE SPECIFIC EVENT
export function getOneEvent(event) {
  return {
    type: GET_ONE_EVENT,
    payload: event
  };
}

export function fetchOneEvent(id) {
  return dispatch => {
    request
      .get(`http://localhost:5000/events/${id}`)
      .then(res => {
        console.log('res.body', res.body);
        return res.body;
      })
      .then(data => {
        dispatch(getOneEvent(data));
      })
      .catch(err => console.log('error getting that event', err));
  };
}
