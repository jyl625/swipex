import { RECEIVE_USER_THREADS, RECEIVE_NEW_THREAD } from '../actions/thread_actions';

const ThreadsReducer = (state = { all: {}, new: undefined}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_THREADS:
      nextState.all = action.threads.data;
      return nextState;
    case RECEIVE_NEW_THREAD:
      nextState.new = action.thread.data;
      return nextState;
    default:
      return state;
  }
}

export default ThreadsReducer;