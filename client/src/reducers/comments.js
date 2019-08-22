import { UPLOAD_COMMENT, GET_COMMENTS } from '../actions/types';

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPLOAD_COMMENT:
      return { ...state, ...payload };

    case GET_COMMENTS:
      return payload;

    default:
      return state;
  }
}
