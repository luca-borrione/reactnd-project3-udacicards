// @flow
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import DeckSummary from './DeckSummary';
import { palePurple } from '../utils/colors';

const styles = StyleSheet.create({
  decksList: {
    flex: 1,
    backgroundColor: palePurple,
  },
});

type Props = any;

class DecksList extends Component<Props, any> {
  onPress = (deckId: string) => (): void => {
    const { navigation } = this.props;
    console.log('on press', deckId);
    navigation.navigate('DeckView', { id: deckId });
  };

  render() {
    const decks = {
      deckA: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
      deck2: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
      deck3: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
      deck4: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
      deck5: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
      deck6: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
      deck7: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
      deck8: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
    };

    return (
      <View style={styles.decksList}>
        <ScrollView>
          {Object.keys(decks).map((key, index, array) => (
            <DeckSummary
              key={key}
              title={decks[key].title}
              numOfCards={decks[key].cards.length}
              onPress={this.onPress(key)}
              lastChild={index === array.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default DecksList;
