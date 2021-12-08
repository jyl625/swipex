import axios from 'axios';

export const fetchUserExchanges = userId => (
  axios.get(`api/exchanges/user/${userId}`)
)