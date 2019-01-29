// @flow
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from './logger'; // DEBUG PURPOSES

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(
  thunk,
  // logger, // DEBUG PURPOSES
));
