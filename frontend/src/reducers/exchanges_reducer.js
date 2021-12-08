
import { RECEIVE_USER_EXCHANGES } from "../actions/exchange_actions";

const ExchangesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USER_EXCHANGES:
      nextState.user = action.exchanges.data;
      return nextState;
    default:
      return state;
  }
}

export default ExchangesReducer;