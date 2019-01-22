// @flow
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import DeckSummary from './DeckSummary';
import { palePurple } from '../utils/colors';
import { type Deck } from '../utils/types';

const styles = StyleSheet.create({
  decksList: {
    flex: 1,
    backgroundColor: palePurple,
  },
});

type Props = {
  decks: Array<Deck>,
  navigation: NavigationScreenProp<NavigationState>,
};

class DecksList extends Component<Props> {
  onPress = (deckId: string) => (): void => {
    const { navigation } = this.props;
    navigation.navigate('DeckView', { deckId });
  };

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.decksList}>
        <ScrollView>
          {decks.map((deck, index, array) => (
            <DeckSummary
              key={deck.id}
              title={deck.title}
              numOfCards={deck.cards.length}
              onPress={this.onPress(deck.id)}
              lastChild={index === array.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default DecksList;
