import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import swipes from './swipe_reducer';
import cafeterias from './cafeteria_reducer';
import users from './user_reducer';
import threads from './thread_reducer';
import exchanges from './exchanges_reducer';
import ui from './ui_reducer';


const RootReducer = combineReducers({
  session,
  errors, 
  swipes,
  cafeterias,
  users,
  threads,
  exchanges,
  ui
});

export default RootReducer;