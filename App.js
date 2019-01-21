// @flow
import React, { type Element } from 'react';
import { createStore, type Store } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middlewares';
import Main from './containers/Main';
import {
  type StateMap,
  type StoreAction,
} from './utils/types';

const store: Store<StateMap, StoreAction> = createStore(reducer, middleware);

const App = (): Element<typeof Provider> => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
