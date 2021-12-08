import { 
  RECEIVE_THREAD,
  RECEIVE_USER_THREADS,
  REMOVE_THREAD
} from "../actions/thread_actions";

const ThreadsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_THREAD:
      return action.thread.data;
    case RECEIVE_USER_THREADS:
      nextState = Object.assign({}, action.userThreads.data);
      return nextState;
    case REMOVE_THREAD:
      delete nextState[action.threadId];
      return nextState;
    default:
      return state;
  }
}

export default ThreadsReducer;