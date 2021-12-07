import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import swipes from './swipe_reducer';
import cafeterias from './cafeteria_reducer';

const RootReducer = combineReducers({
  session,
  errors, 
  swipes,
  cafeterias
});

export default RootReducer;