import { UPLOAD_TICKET, GET_ALL_TICKETS, GET_ONE_TICKET } from './types';
import request from 'superagent';

//CREATE TICKET
export function uploadTICKET(ticket) {
  return {
    type: UPLOAD_TICKET,
    payload: ticket
  };
}

export const saveTicket = (id, data) => (dispatch, getState) => {
  const token = getState();
  console.log('token', token);

  request
    .post(`http://localhost:5000/events/${id}/ticket`)
    .set('Authorization', 'Bearer ' + getState().register.jwt)
    .send(data)
    .then(res => {
      return res;
    })
    .then(data => dispatch(uploadTICKET(data.body)))
    .catch(err => console.log(err));
};

//GET ALL THE CURRENT TICKETS
export function getAllTickets(tickets) {
  return {
    type: GET_ALL_TICKETS,
    payload: tickets
  };
}

export function fetchTickets() {
  return dispatch => {
    request
      .get(`http://localhost:5000/events/${id}/ticket`)
      .then(res => {
        console.log('res', res.body.tickets);
        return res.body.tickets;
      })
      .then(data => {
        dispatch(getAllTickets(data));
      })
      .catch(err => console.log('error getting tickets', err));
  };
}

//GET ONE SPECIFIC TICKET
export function getOneTicket(ticket) {
  const id = event.id;
  return {
    type: GET_ONE_TICKET,
    payload: { id, ticket }
  };
}

export function fetchOneTicket(id) {
  return dispatch => {
    request
      .get(`http://localhost:5000/events/${id}/ticket`)
      .then(res => {
        console.log('res', res);
        dispatch(getOneTicket(res.body.ticket));
      })
      // .then(data => {
      //   dispatch(getOneEvent(data));
      // })
      .catch(err => console.log('error getting ticket', err));
  };
}
