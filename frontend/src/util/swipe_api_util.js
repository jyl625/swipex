import axios from 'axios';

export const fetchSwipes = () => {
  return axios.get('api/swipes');
}

export const fetchSwipe = swipeId => {
  return axios.get(`api/swipes/swipe/${swipeId}`);
}

export const createNewSwipe = swipeData => {
  return axios.post('api/swipes', swipeData);
}