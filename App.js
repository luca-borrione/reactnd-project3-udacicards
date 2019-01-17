// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, type Store } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middlewares';

// const store: Store<StateMap, StoreAction> = createStore(reducer, middleware);
const store: Store<any, any> = createStore(reducer, middleware);

class App extends React.Component {
  render() {
    console.log('>> App rendered');
    return (
      <Provider store={store}>
        <View style={styles.app}>
          <Text>APP</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
