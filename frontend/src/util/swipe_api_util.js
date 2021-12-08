import axios from 'axios';

export const fetchSwipes = () => {
  return axios.get('api/sellposts');
}

export const fetchSwipe = swipeId => {
  return axios.get(`api/sellposts/${swipeId}`);
}

export const fetchUserSwipes = userId => (
  axios.get(`api/sellposts/user/${userId}`)
)

export const createNewSwipe = swipeData => {
  return axios.post('api/sellposts', swipeData);
}