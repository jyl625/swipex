import axios from 'axios';

export const fetchUserExchanges = userId => (
  axios.get(`api/exchanges/user/${userId}`)
)

export const fetchExchanges = () => (
  axios.get('api/exchanges')
)

export const createExchange = exchangeData => {
  return axios.post('api/exchanges/', exchangeData);
}