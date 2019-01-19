// @flow
import React, { type Element } from 'react';
import { Text, View } from 'react-native';
import { purple } from '../utils/colors';

const AddDeck = (): Element<typeof View> => (
  <View>
    <Text>AddDeck</Text>
  </View>
);

AddDeck.navigationOptions = {
  headerStyle: {
    backgroundColor: purple,
  },
};

export default AddDeck;
