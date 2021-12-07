import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import swipes from './swipe_reducer';
// import swipes from './swipes_reducer'

const RootReducer = combineReducers({
  session,
  errors, 
  swipes 
});

export default RootReducer;