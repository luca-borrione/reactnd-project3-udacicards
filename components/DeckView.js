// @flow
import React, { Component, type Element } from 'react';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import BaseTouch from './BaseTouch';
import {
  purple,
  white,
  lightBordeaux,
} from '../utils/colors';
import commonStyles from '../utils/styles';
import { type Deck } from '../utils/types';

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

type Props = {
  busy: boolean,
  deck: Deck | void,
  navigation: NavigationScreenProp<NavigationState>,
  setReadyState: () => void,
  unsetDeck: (deckId: string) => Promise<void>,
};

class DeckView extends Component<Props> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<NavigationState>
  }) => {
    const { deckTitle } = navigation.state.params;
    return {
      title: deckTitle || '',
    };
  };

  componentDidMount() {
    const { deck, navigation } = this.props;
    if (deck) {
      navigation.setParams({
        deckTitle: deck.title,
      });
    }
  }

  handleDeleteDeck = async () => {
    const {
      deck,
      navigation,
      unsetDeck,
      setReadyState,
    } = this.props;
    if (deck) {
      await unsetDeck(deck.id);
      navigation.navigate('DecksList');
      setReadyState();
    }
  };

  render() {
    const { busy, deck } = this.props;

    if (!deck) {
      return null;
    }

    const numOfCards: number = deck.cards.length;
    return (
      <View style={styles.deckView}>
        <View style={styles.block1}>
          <Text style={commonStyles.h1}>{deck.title}</Text>
          <Text style={[commonStyles.h3, commonStyles.secondaryText]}>{numOfCards} cards</Text>
        </View>
        <View style={styles.block2}>
          <BaseTouch
            button
            text="Add Card"
            onPress={() => alert('add a card')}
            disabled={busy}
          />
          <BaseTouch
            button
            text="Start Quiz"
            onPress={() => alert('start quiz')}
            disabled={numOfCards === 0 || busy}
            backgroundColor={purple}
            color={white}
            borderColor={white}
          />
          <BaseTouch
            text="Delete Deck"
            onPress={this.handleDeleteDeck}
            color={lightBordeaux}
            disabled={busy}
          />
        </View>
      </View>
    );
  }
}

export default DeckView;
