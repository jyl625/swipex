
import { RECEIVE_USER_EXCHANGES, RECEIVE_EXCHANGES, RECEIVE_NEW_EXCHANGE} from "../actions/exchange_actions";

const ExchangesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  
  switch(action.type) {
    case RECEIVE_USER_EXCHANGES:
      nextState.user = action.exchanges.data;
      return nextState;
    case RECEIVE_EXCHANGES:
      nextState.all = action.exchanges.data;
      return nextState;
    case RECEIVE_NEW_EXCHANGE:
      nextState.new = action.exchange.data;
      return nextState;
    default:
      return state;
  }
}

export default ExchangesReducer;