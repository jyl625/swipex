import axios from 'axios';

export const fetchComments = () => {
  return axios.get('api/comments');
}

export const fetchComment = commentId => {
  return axios.get(`api/comments/${commentId}`);
}

export const createComment = commentData => {
  return axios.post('api/comments/', commentData);
}