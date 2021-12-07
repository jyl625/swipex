import axio from 'axios';

export const fetchSwipes = () => {
  return axios.get('api/swipes');
}

export const fetchSwipe = id => {
  return axios.get(`api/swipes/swipe/${id}`);
}

export const createSwipe = swipeData => {
  return axios.post('api/swipes', swipeData);
}