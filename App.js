// @flow
import React, { Component, type Element } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, type Store } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middlewares';
import { purple } from './utils/colors';
import UdaciStatusBar from './components/UdaciStatusBar';
import Navigation from './components/Navigation';

// const store: Store<StateMap, StoreAction> = createStore(reducer, middleware);
const store: Store<any, any> = createStore(reducer, middleware);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// class App extends Component<Props, State> {
class App extends Component<any, any> {
  render(): Element<typeof Provider> {
    return (
      <Provider store={store}>
        <View style={styles.app}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Navigation />
        </View>
      </Provider>
    );
  }
}

export default App;
