// @flow
import React, { type Element } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BaseTouch from './BaseTouch';
import { gray, purple, white, lightBordeaux } from '../utils/colors';

const styles = StyleSheet.create({
  deckView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  block1: {
    alignItems: 'center',
    marginTop: 100,
  },
  block2: {
    marginTop: 100,
  },
  h1: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  h3: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  secondaryText: {
    color: gray,
  },
});

const DeckView = (): Element<typeof View> => (
  <View style={styles.deckView}>
    <View style={styles.block1}>
      <Text style={styles.h1}>TITLE</Text>
      <Text style={[styles.h3, styles.secondaryText]}>10 cards</Text>
    </View>
    <View style={styles.block2}>
      <BaseTouch
        button
        text="Add Card"
        onPress={() => alert('add a card')}
        disabled={false}
      />
      <BaseTouch
        button
        text="Start Quiz"
        onPress={() => alert('start quiz')}
        disabled={false}
        backgroundColor={purple}
        color={white}
        borderColor={white}
      />
      <BaseTouch
        text="Delete Deck"
        onPress={() => alert('delete deck')}
        color={lightBordeaux}
      />
    </View>
  </View>
);

DeckView.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.id,
});

export default DeckView;
