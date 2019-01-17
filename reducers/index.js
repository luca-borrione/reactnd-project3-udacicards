// @flow
import { type Reducer } from 'redux';
import { combineReducers } from 'redux-immutable';
import status from './status';

const reducers = {
  status,
};

// const reducer: Reducer<StateMap, StoreAction> = combineReducers(reducers);
const reducer: Reducer<any, any> = combineReducers(reducers);

export default reducer;
