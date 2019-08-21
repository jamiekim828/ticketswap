import {
  UPLOAD_TICKET,
  GET_ALL_TICKETS,
  GET_ONE_TICKET
} from '../actions/types';

const initialState = {
  ticket: {},
  tickets: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPLOAD_TICKET:
      return { ...state, ...payload };

    case GET_ALL_TICKETS:
      return payload;

    case GET_ONE_TICKET:
      return payload;

    default:
      return state;
  }
}
