import { UPLOAD_COMMENT, GET_COMMENTS } from './types';
import request from 'superagent';

//CREATE COMMENT
export function uploadComment(comment) {
  return {
    type: UPLOAD_COMMENT,
    payload: comment
  };
}

export const saveComment = (id, ticketsId, data) => (dispatch, getState) => {
  const token = getState();
  console.log('token', token);

  request
    .post(`http://localhost:5000/events/${id}/ticket/${ticketsId}/comments`)
    .set('Authorization', 'Bearer ' + getState().register.jwt)
    .send(data)
    .then(res => {
      return res;
    })
    .then(data => dispatch(uploadComment(data.body)))
    .catch(err => console.log(err));
};

//GET ALL COMMENTS
export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    payload: comments
  };
}

export function fetchComments(id, ticketsId) {
  return dispatch => {
    request
      .get(`http://localhost:5000/events/${id}/ticket/${ticketsId}/comments`)
      .then(res => {
        return res.body;
      })
      .then(data => {
        dispatch(getComments(data));
      })
      .catch(err => console.log('error getting comments', err));
  };
}
