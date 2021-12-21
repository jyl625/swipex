import { 
  RECEIVE_THREAD,
  RECEIVE_USER_THREADS,
  REMOVE_THREAD
} from "../actions/thread_actions";

// const ThreadsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let nextState = Object.assign({}, state)
//   // debugger
//   switch(action.type){
//     case RECEIVE_THREAD:
//       if (!action.thread.data) {return nextState}
//       else {
//         nextState[action.thread.data._id] = action.thread.data 
//         return nextState
//       };
//     case RECEIVE_USER_THREADS:
//       nextState = {}
//       action.userThreads.data.forEach(userThread => {
//         nextState[userThread._id] = userThread;
//       })
//       // console.log(nextState)
//       return nextState;
//     case REMOVE_THREAD:
//       delete nextState[action.threadId];
//       return nextState;
//     default:
//       return state;
//     }
//   }

// import { RECEIVE_USER_THREADS, RECEIVE_NEW_THREAD } from '../actions/thread_actions';

const ThreadsReducer = (state = { all: {}, user: {}, new: undefined}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_THREADS:
      nextState.user = action.userThreads.data;
      // debugger
      return nextState;
    case RECEIVE_THREAD:
      nextState.new = action.thread.data;
      // debugger
      return nextState;
    default:
      return state;
  }
}

export default ThreadsReducer;