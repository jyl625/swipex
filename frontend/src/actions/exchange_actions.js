import { fetchUserExchanges } from '../util/exchange_api_util';

export const RECEIVE_USER_EXCHANGES = "RECEIVE_USER_EXCHANGES";

export const receiveUserExchanges = exchanges => ({
  type: RECEIVE_USER_EXCHANGES,
  exchanges
})

export const requestUserExchanges = userId => dispatch => (
  fetchUserExchanges(userId)
  .then(exchanges => dispatch(receiveUserExchanges(exchanges)))
  .catch(err => console.log(err))
)