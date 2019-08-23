import {
  UPLOAD_TICKET,
  GET_ALL_TICKETS,
  GET_ONE_TICKET,
  DELETE_TICKET,
  GET_TICKETS_COUNT
} from '../actions/types';

const initialState = {
  ticket: {},
  tickets: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log(' ticket reducer', 'a', action, 'p', payload);

  switch (type) {
    case UPLOAD_TICKET:
      return { ...state, ...payload };

    case GET_ALL_TICKETS:
      return payload;

    case GET_ONE_TICKET:
      return payload;

    case DELETE_TICKET:
      return state.filter(ticket => ticket.id !== payload.id);

    case GET_TICKETS_COUNT:
      return payload;

    default:
      return state;
  }
}
