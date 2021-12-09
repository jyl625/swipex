import { fetchUserExchanges, fetchExchanges, createExchange } from '../util/exchange_api_util';

export const RECEIVE_USER_EXCHANGES = "RECEIVE_USER_EXCHANGES";
export const RECEIVE_EXCHANGES = "RECEIVE_EXCHANGES";
export const RECEIVE_NEW_EXCHANGE = "RECEIVE_NEW_EXCHANGE";

export const receiveUserExchanges = exchanges => ({
  type: RECEIVE_USER_EXCHANGES,
  exchanges
})

export const receiveExchanges = exchanges => ({
  type: RECEIVE_EXCHANGES,
  exchanges
})

const receiveNewExchange = exchange => ({
  type: RECEIVE_NEW_EXCHANGE,
  exchange
})

export const requestUserExchanges = userId => dispatch => (
  fetchUserExchanges(userId)
    .then(exchanges => dispatch(receiveUserExchanges(exchanges)))
    .catch(err => console.log(err))
)

export const requestExchanges = () => dispatch => (
  fetchExchanges()
    .then(exchanges => dispatch(receiveExchanges(exchanges)))
    .catch(err => console.log(err))
)

export const createNewExchange = (exchange) => dispatch => (
  createExchange(exchange)
    .then(exchange => dispatch(receiveNewExchange(exchange)))
)