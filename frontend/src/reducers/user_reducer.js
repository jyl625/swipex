import { RECEIVE_NEW_USER } from "../actions/user_actions";

const UsersReducer = (state = { all: {}, new: undefined}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_NEW_USER:
      nextState.all[action.user.data.userId] = action.user.data;
      return nextState;
      default:
        return state;
  }
}

export default UsersReducer