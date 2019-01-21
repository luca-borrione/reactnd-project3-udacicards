// @flow
import { type Reducer } from 'redux';
import { combineReducers } from 'redux-immutable';
import status from './status';
import decks from './decks';
import {
  type StateMap,
  type StoreAction,
} from '../utils/types';

const reducers = {
  decks,
  status,
};

const reducer: Reducer<StateMap, StoreAction> = combineReducers(reducers);

export default reducer;
