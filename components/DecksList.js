// @flow
import React, { type Element } from 'react';
import { Text, View } from 'react-native';
import { purple } from '../utils/colors';

const DecksList = (): Element<typeof View> => (
  <View>
    <Text>DecksList</Text>
  </View>
);

DecksList.navigationOptions = {
  headerStyle: {
    backgroundColor: purple,
  },
};

export default DecksList;
