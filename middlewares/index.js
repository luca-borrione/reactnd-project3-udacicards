// @flow
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(
  thunk,
  logger,
));
