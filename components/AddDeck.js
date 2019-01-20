// @flow
import React, { type Element } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { palePurple } from '../utils/colors';

const styles = StyleSheet.create({
  addDeck: {
    flex: 1,
    backgroundColor: palePurple,
  },
});

const AddDeck = (): Element<typeof View> => (
  <View style={styles.addDeck}>
    <Text>AddDeck</Text>
  </View>
);

export default AddDeck;
