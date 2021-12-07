import axio from 'axios';

export const requestSwipes = () => {
  return axios.get('api/swipes');
}

export const requestSwipe = id => {
  return axios.get(`api/swipes/swipe/${id}`);
}

export const createSwipe = swipeData => {
  return axios.post('api/swipes', swipeData);
}