
import { RECEIVE_NEW_SWIPE, RECEIVE_SWIPES, RECEIVE_USER_SWIPES } from "../actions/swipe_actions";

const SwipesReducer = (state = { all: {}, user: {}, new: undefined}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SWIPES:
      nextState.all = action.swipes.data;
      return nextState;
    case RECEIVE_USER_SWIPES:
      nextState.user = action.swipes.data;
    case RECEIVE_NEW_SWIPE:
      nextState.new = action.swipe.data;
      return nextState;
    default:
      return state;
  }
}

export default SwipesReducer;