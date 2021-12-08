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
      nextState[action.thread.data._id] = action.thread.data;
      return nextState;
    case RECEIVE_USER_THREADS:
      nextState = {}
      action.userThreads.forEach(userThread => {
        nextState[userThread.data._id] = userThread.data;
      })
      return nextState;
    case REMOVE_THREAD:
      delete nextState[action.threadId];
      return nextState;
    default:
      return state;
  }
}

export default ThreadsReducer;