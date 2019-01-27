// @flow
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import CardFlip from 'react-native-card-flip';
import BaseTouch from './BaseTouch';
import commonStyles from '../utils/styles';
import { type Card } from '../utils/types';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: '100%',
  },
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FE474C',
    borderRadius: Platform.OS === 'ios' ? 10 : 2,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardQuestion: {
    backgroundColor: '#FE474C',
  },
  cardAnswer: {
    backgroundColor: '#FEB12C',
  },
  cardLabel: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '90%',
    fontFamily: 'System',
  },
});

const QUESTION_SIDE = 'question_side';
const ANSWER_SIDE = 'answer_side';

type Props = {
  addCorrectCard: (cardId: string) => void,
  addIncorrectCard: (cardId: string) => void,
  busy: boolean,
  cards: Array<Card>,
  initQuiz: () => void,
  navigation: NavigationScreenProp<NavigationState>,
  setBusyState: () => void,
  setReadyState: () => void,
};

type State = {
  cardIndex: number,
  cardSide: string,
};

class Quiz extends Component<Props, State> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<NavigationState>
  }) => {
    const { title } = navigation.state.params;
    return {
      title: title || '',
    };
  };

  cardFlip: typeof CardFlip = null;

  state = {
    cardIndex: 0,
    cardSide: QUESTION_SIDE,
  };

  componentDidMount() {
    const { initQuiz } = this.props;
    this.updateTitle();
    initQuiz();
  }

  setCardSide = (cardSide: string): void => {
    this.setState({ cardSide });
  }

  showQuestion = () => {
    const { setBusyState } = this.props;
    setBusyState();
    setTimeout(this.setCardSide, 250, QUESTION_SIDE);
    this.cardFlip.flip();
  };

  showAnswer = () => {
    const { setBusyState } = this.props;
    setBusyState();
    setTimeout(this.setCardSide, 250, ANSWER_SIDE);
    this.cardFlip.flip();
  };

  onPressCorrect = () => {
    const { cardIndex } = this.state;
    const { addCorrectCard, cards } = this.props;
    const card = cards[cardIndex];
    addCorrectCard(card.id);
    this.next();
  };

  onPressIncorrect = () => {
    const { cardIndex } = this.state;
    const { addIncorrectCard, cards } = this.props;
    const card = cards[cardIndex];
    addIncorrectCard(card.id);
    this.next();
  };

  onCardFlipEnd = () => {
    const { setReadyState } = this.props;
    setReadyState();
  };

  updateTitle() {
    const { cards, navigation } = this.props;
    const { cardIndex } = this.state;
    navigation.setParams({
      title: `card ${cardIndex + 1} of ${cards.length}`,
    });
  }

  next() {
    if (this.nextCardExists()) {
      this.goToNextCard();
    } else {
      this.goToResult();
    }
  }

  nextCardExists(): boolean {
    const { cardIndex } = this.state;
    const { cards } = this.props;
    return cardIndex < cards.length - 1;
  }

  goToNextCard() {
    const { cardSide } = this.state;

    const setState = () => {
      this.setState(prevState => ({
        cardIndex: prevState.cardIndex + 1,
      }));
      this.updateTitle();
    };

    if (cardSide === ANSWER_SIDE) {
      setTimeout(setState, 250);
      this.showQuestion();
    } else {
      setState();
    }
  }

  goToResult() {
    alert('END OF DECK');
  }

  render() {
    const { cardIndex, cardSide } = this.state;
    const { busy, cards } = this.props;
    const card = cards[cardIndex];
    return (
      <View style={commonStyles.screenContainer}>
        <View style={commonStyles.blockTop}>
          <CardFlip
            style={styles.cardContainer}
            ref={cardFlip => this.cardFlip = cardFlip}
            onFlipEnd={this.onCardFlipEnd}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.cardQuestion]}
              onPress={this.showAnswer}
              disabled={busy}
            >
              <Text style={styles.cardLabel} numberOfLines={5}>
                {card.question}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.cardAnswer]}
              onPress={this.showQuestion}
              disabled={busy}
            >
              <Text style={styles.cardLabel}>{card.answer}</Text>
            </TouchableOpacity>
          </CardFlip>
        </View>
        {cardSide === QUESTION_SIDE
          ? (
            <View style={commonStyles.blockBottom}>
              <BaseTouch
                button
                text="Show Answer"
                onPress={this.showAnswer}
                disabled={busy}
              />
            </View>
          )
          : (
            <View style={commonStyles.blockBottom}>
              <BaseTouch
                button
                text="Correct"
                onPress={this.onPressCorrect}
                disabled={busy}
              />
              <BaseTouch
                button
                text="Incorrect"
                onPress={this.onPressIncorrect}
                disabled={busy}
              />
            </View>
          )
        }
      </View>
    );
  }
}

export default Quiz;
