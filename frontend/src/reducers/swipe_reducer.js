
import { RECEIVE_NEW_SWIPE, RECEIVE_SWIPES, RECEIVE_USER_SWIPES, RECEIVE_SWIPE } from "../actions/swipe_actions";

const SwipesReducer = (state = { all: {}, user: {}, new: undefined, single: {} }, action) => {
  const nextState = Object.assign({}, state);
  console.log(action.swipes)
  switch(action.type) {
    case RECEIVE_SWIPE:
      nextState.single = action.swipe.data;
      return nextState;
    case RECEIVE_SWIPES:
      nextState.all = action.swipes.data;
      return nextState;
    case RECEIVE_USER_SWIPES:
      nextState.user = action.swipes.data;
      return nextState;
    case RECEIVE_NEW_SWIPE:
      nextState.new = action.swipe.data;
      return nextState;
    default:
      return state;
  }
}

export default SwipesReducer;