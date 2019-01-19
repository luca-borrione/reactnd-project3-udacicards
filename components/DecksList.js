// @flow
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import DeckSummary from './DeckSummary';

const styles = StyleSheet.create({
  decksListContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});

/* eslint-disable react/prefer-stateless-function */
class DecksList extends Component<any, any> {
  render() {
    const decks = {
      deckA: {
        key: 'deckA',
        title: 'titleA',
        cards: [],
      },
    };

    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <ScrollView>
        <View style={styles.decksListContainer}>
          {Object.keys(decks).map(key => (
            <DeckSummary
              key={key}
              title={decks[key].title}
              numOfCards={decks[key].cards.length}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default DecksList;
