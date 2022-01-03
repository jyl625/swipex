import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(thunk, logger)
    applyMiddleware(thunk) //Comment this back in and comment out above line for dev
  )
);

export default configureStore;