// @flow
import { type Reducer } from 'redux';
import { combineReducers } from 'redux-immutable';
import cards from './cards';
import decks from './decks';
import status from './status';
import {
  type StateMap,
  type StoreAction,
} from '../utils/types';

const reducers = {
  cards,
  decks,
  status,
};

const reducer: Reducer<StateMap, StoreAction> = combineReducers(reducers);

export default reducer;
