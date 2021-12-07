import { RECEIVE_NEW_CAFETERIA, RECEIVE_CAFETERIAS } from '../actions/cafetiera_actions';

const CafeteriaReducer = (state = { all: {}, location: {}, new: undefined}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CAFETERIAS:
      nextState.all = action.cafeterias.data;
      return nextState;
    case RECEIVE_NEW_CAFETERIA:
      nextState.new = action.cafeteria.data;
      return nextState;
    default:
      return state;
  }
}

export default CafeteriaReducer;