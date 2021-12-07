import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import swipes from './swipe_reducer';
import cafeterias from './cafeteria_reducer';
import users from './user_reducer';


const RootReducer = combineReducers({
  session,
  errors, 
  swipes,
  cafeterias,
  users
});

export default RootReducer;