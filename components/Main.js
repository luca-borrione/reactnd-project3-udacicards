// @flow
import React, { Component, type Element } from 'react';
import { View } from 'react-native';
import Navigation from './Navigation';
import UdaciStatusBar from './UdaciStatusBar';
import { purple } from '../utils/colors';

type Props = {
  loadInitialData: () => void,
  loading: boolean,
  setNotification: () => void,
};

class Main extends Component<Props> {
  async componentDidMount(): Promise<void> {
    const { loadInitialData, setNotification } = this.props;
    await setNotification();
    await loadInitialData();
  }

  render(): Element<any> {
    const { loading } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {/* TODO: LOADING SPINNER */}
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        {loading === true
          ? null
          : <Navigation />}
      </View>
    );
  }
}

export default Main;
