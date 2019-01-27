// @flow
/* eslint-disable no-return-assign */
import React, { Component, type Element } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
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

type Props = {
  card: Card,
  addCorrectCard: (callback?: ()=>void) => void,
  addIncorrectCard: (callback?: ()=>void) => void,
  next: () => void,
};

type State = {
  cardId: string,
  side: number,
  status: Symbol,
};

const QUESTION_SIDE = 0;
const ANSWER_SIDE = 1;
const READY_STATE = Symbol('READY_STATE');
const BUSY_STATE = Symbol('BUSY_STATE');

class QuizCard extends Component<Props, State> {
  cardFlip: typeof CardFlip = null;

  state = {
    cardId: '',
    side: QUESTION_SIDE,
    status: READY_STATE,
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (nextProps.card.id !== nextState.cardId) {
      if (this.cardFlip.state.side !== QUESTION_SIDE) {
        // A new card needs to be displayed and we are showing the back side
        this.showQuestion();
        setTimeout(this.setCardId, 250, nextProps.card.id);
      } else {
        const busy = nextState.status === BUSY_STATE;
        // Busy processing the showQuestion instruction above
        if (!busy) {
          // We should never be here, just as a safaety measure
          this.setCardId(nextProps.card.id);
        }
      }
      return false;
    }
    return true;
  }

  setBusyState = (): void => {
    this.setState({ status: BUSY_STATE });
  }

  setReadyState = (): void => {
    this.setState({ status: READY_STATE });
  }

  setCardId = (cardId: string): void => {
    this.setState({ cardId });
  }

  setSide = (side: number): void => {
    this.setState({ side });
  }

  showQuestion = () => {
    this.setBusyState();
    setTimeout(this.setSide, 250, QUESTION_SIDE);
    this.cardFlip.flip();
  };

  showAnswer = () => {
    this.setBusyState();
    setTimeout(this.setSide, 250, ANSWER_SIDE);
    this.cardFlip.flip();
  };

  onPressCorrect = () => {
    const { addCorrectCard, next } = this.props;
    this.setBusyState();
    addCorrectCard(next);
  };

  onPressIncorrect = () => {
    const { addIncorrectCard, next } = this.props;
    this.setBusyState();
    addIncorrectCard(next);
  };

  onCardFlipEnd = () => {
    this.setReadyState();
  };

  render(): Element<typeof View> {
    const { side, status } = this.state;
    const { card } = this.props;
    const busy = status === BUSY_STATE;

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
        {side === QUESTION_SIDE
          ? (
            <View style={commonStyles.blockBottom}>
              <BaseTouch
                button
                text="Show Answer"
                onPress={this.showAnswer}
                inactive={busy}
              />
            </View>
          )
          : (
            <View style={commonStyles.blockBottom}>
              <BaseTouch
                button
                text="Correct"
                onPress={this.onPressCorrect}
                inactive={busy}
              />
              <BaseTouch
                button
                text="Incorrect"
                onPress={this.onPressIncorrect}
                inactive={busy}
              />
            </View>
          )
        }
      </View>
    );
  }
}

export default QuizCard;
