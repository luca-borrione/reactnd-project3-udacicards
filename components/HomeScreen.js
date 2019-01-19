// @flow
import React, { type Element } from 'react';
import { Text, View } from 'react-native';
import { purple } from '../utils/colors';

const HomeScreen = (): Element<typeof View> => (
  <View>
    <Text>Hello</Text>
  </View>
);

HomeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: purple,
  },
};

export default HomeScreen;
