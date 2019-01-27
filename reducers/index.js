// @flow
import { type Reducer } from 'redux';
import { combineReducers } from 'redux-immutable';
import cards from './cards';
import decks from './decks';
import quiz from './quiz';
import status from './status';
import {
  type StateMap,
  type StoreAction,
} from '../utils/types';

const reducers = {
  cards,
  decks,
  quiz,
  status,
};

const reducer: Reducer<StateMap, StoreAction> = combineReducers(reducers);

export default reducer;
