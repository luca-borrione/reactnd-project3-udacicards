// @flow
import { type Reducer } from 'redux';
import { combineReducers } from 'redux-immutable';
import cards from './cards';
import decks from './decks';
import notification from './notification';
import quiz from './quiz';
import status from './status';
import {
  type StateMap,
  type StoreAction,
} from '../utils/types';

const reducers = {
  cards,
  decks,
  notification,
  quiz,
  status,
};

const reducer: Reducer<StateMap, StoreAction> = combineReducers(reducers);

export default reducer;
