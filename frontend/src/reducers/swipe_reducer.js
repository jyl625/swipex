
import { RECEIVE_SWIPE, RECEIVE_SWIPES } from "../actions/swipe_actions";

const SwipesReducer = (state = { all: {}, swpie: undefined}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SWIPES:
      nextState.all = action.swipes.data;
      return nextState;
    case RECEIVE_SWIPE:
      nextState[action.swipe.id] = action.swipe;
      return nextState;
    default:
      return state;
  }
}

export default SwipesReducer;