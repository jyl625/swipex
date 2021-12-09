import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import swipes from './swipe_reducer';
import cafeterias from './cafeteria_reducer';
<<<<<<< HEAD
import threads from './thread_reducer'
=======
import users from './user_reducer';
import threads from './thread_reducer';
import exchanges from './exchanges_reducer';

>>>>>>> main

const RootReducer = combineReducers({
  session,
  errors, 
  swipes,
  cafeterias,
<<<<<<< HEAD
  threads
=======
  users,
  threads,
  exchanges
>>>>>>> main
});

export default RootReducer;