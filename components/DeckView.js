// @flow
import React, { type Element } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BaseTouch from './BaseTouch';
import {
  purple,
  white,
  lightBordeaux,
} from '../utils/colors';
import commonStyles from '../utils/styles';

const styles = StyleSheet.create({
  deckView: {
    flex: 1,
  },
  block1: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 100,
    flex: 1,
  },
  block2: {
    justifyContent: 'flex-end',
    marginRight: 40,
    marginLeft: 40,
    flex: 1,
  },
});

const DeckView = (): Element<typeof View> => (
  <View style={styles.deckView}>
    <View style={styles.block1}>
      <Text style={commonStyles.h1}>TITLE</Text>
      <Text style={[commonStyles.h3, commonStyles.secondaryText]}>10 cards</Text>
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
