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
  deck: Deck,
  navigation: NavigationScreenProp<NavigationState>,
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
    navigation.setParams({
      deckTitle: deck.title,
    });
  }

  render() {
    const { deck } = this.props;
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
          />
          <BaseTouch
            button
            text="Start Quiz"
            onPress={() => alert('start quiz')}
            disabled={numOfCards === 0}
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
  }
}

export default DeckView;
