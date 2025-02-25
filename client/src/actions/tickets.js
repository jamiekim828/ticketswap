import {
  UPLOAD_TICKET,
  GET_ALL_TICKETS,
  GET_ONE_TICKET,
  DELETE_TICKET,
  GET_TICKETS_COUNT
} from './types';
import request from 'superagent';

import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

//CREATE TICKET
export function uploadTicket(ticket) {
  return {
    type: UPLOAD_TICKET,
    payload: ticket
  };
}

export const saveTicket = (id, data) => (dispatch, getState) => {
  console.log('alsdjialsdjfbaldskhjvbaoiuehfpblkajsdbvkjasdnvlkjans');

  const token = getState();
  console.log('token', token);

  request
    .post(`http://localhost:5000/events/${id}/ticket`)
    .set('Authorization', 'Bearer ' + getState().register.jwt)
    .send(data)
    .then(res => {
      return res;
    })
    .then(data => dispatch(uploadTicket(data.body)))
    .then(() => {
      browserHistory.push('/events');
    })
    .catch(err => console.log(err));
};

//GET ALL THE CURRENT TICKETS
export function getAllTickets(tickets) {
  return {
    type: GET_ALL_TICKETS,
    payload: tickets
  };
}

export function fetchTickets(id) {
  return dispatch => {
    request
      .get(`http://localhost:5000/events/${id}/ticket`)
      .then(res => {
        console.log('T.res', res.body);
        return res.body;
      })
      .then(data => {
        dispatch(getAllTickets(data));
      })
      .catch(err => console.log('error getting tickets', err));
  };
}

//GET ONE SPECIFIC TICKET
export function getOneTicket(ticket) {
  return {
    type: GET_ONE_TICKET,
    payload: ticket
  };
}

export function fetchOneTicket(id, ticketsId) {
  return dispatch => {
    request
      .get(`http://localhost:5000/events/${id}/ticket/${ticketsId}`)
      .then(res => {
        console.log('res222', res.body);
        dispatch(getOneTicket(res.body.ticket));
      })
      // .then(data => {
      //   dispatch(getOneEvent(data));
      // })
      .catch(err => console.log('error getting ticket', err));
  };
}

//DELETE TICKET
export function deleteTicket(ticket) {
  return {
    type: DELETE_TICKET,
    payload: ticket
  };
}

export function removeTicket(id, ticketsId) {
  return dispatch => {
    request
      .delete(`http://localhost:5000/events/${id}/ticket/${ticketsId}`)
      .then(res => {
        dispatch(deleteTicket(res.body));
      })
      .catch(err => console.log('error deleting ticket', err));
  };
}

//GET TICKET COUNT
export function getTicketsCount(tickets) {
  return {
    type: GET_TICKETS_COUNT,
    payload: tickets
  };
}

export function getTicketLength(id) {
  return dispatch => {
    request
      .get(`http://localhost:5000/events/${id}/ticket`)
      .then(res => {
        return res.body;
      })
      .then(data => {
        dispatch(getTicketsCount(data));
      })
      .catch(err => console.log('error getting tickets', err));
  };
}
