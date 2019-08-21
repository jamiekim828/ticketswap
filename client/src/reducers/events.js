import { UPLOAD_EVENT, GET_ALL_EVENTS, GET_ONE_EVENT } from '../actions/types';

const initialState = {
  event: null,
  events: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPLOAD_EVENT:
      return { ...state, ...payload };

    case GET_ALL_EVENTS:
      return payload;

    case GET_ONE_EVENT:
      return { payload };

    default:
      return state;
  }
}
