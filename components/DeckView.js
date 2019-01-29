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
  addCard: () => void,
  busy: boolean,
  deck: Deck | void,
  navigation: NavigationScreenProp<NavigationState>,
  deleteDeck: () => Promise<void>,
  startQuiz: () => void,
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

  componentDidMount(): void {
    const { deck, navigation } = this.props;
    const deckTitle = deck ? deck.title : '';
    navigation.setParams({ deckTitle });
  }

  render(): Element<typeof View> | null {
    const {
      addCard,
      busy,
      deck,
      deleteDeck,
      startQuiz,
    } = this.props;

    if (!deck) {
      return null;
    }

    const cardsLength: number = deck.cards.length;
    return (
      <View style={styles.deckView}>
        <View style={styles.block1}>
          <Text style={commonStyles.h1}>{deck.title}</Text>
          <Text style={[commonStyles.h3, commonStyles.secondaryText]}>{cardsLength} cards</Text>
        </View>
        <View style={styles.block2}>
          <BaseTouch
            button
            text="Add Card"
            onPress={addCard}
            inactive={busy}
          />
          <BaseTouch
            button
            text="Start Quiz"
            onPress={startQuiz}
            disabled={cardsLength === 0}
            inactive={busy}
            backgroundColor={purple}
            color={white}
            borderColor={white}
          />
          <BaseTouch
            text="Delete Deck"
            onPress={deleteDeck}
            color={lightBordeaux}
            inactive={busy}
          />
        </View>
      </View>
    );
  }
}

export default DeckView;
