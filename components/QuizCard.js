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
import {
  purple,
  white,
  green,
  red,
  lightBordeaux,
} from '../utils/colors';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: '100%',
  },
  card: {
    flex: 1,
    width: '100%',
    borderRadius: Platform.OS === 'ios' ? 10 : 2,
    borderWidth: 1,
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
    backgroundColor: purple,
    borderColor: white,
  },
  cardAnswer: {
    backgroundColor: white,
    borderColor: purple,
  },
  cardLabel: {
    fontSize: 24,
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '90%',
    fontFamily: 'System',
  },
  cardQuestionLabel: {
    color: white,
  },
  cardAnswerLabel: {
    color: purple,
  },
});

type Props = {
  card: Card,
  correct: () => void,
  deleteCard: () => Promise<void>,
  incorrect: () => void,
  lastOne: boolean,
};

type State = {
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
    side: QUESTION_SIDE,
    status: READY_STATE,
  };

  setBusyState = (): void => {
    this.setState({ status: BUSY_STATE });
  }

  setReadyState = (): void => {
    this.setState({ status: READY_STATE });
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
    const { correct, lastOne } = this.props;
    this.setBusyState();
    if (lastOne) {
      correct();
    } else {
      this.showQuestion();
      setTimeout(correct, 250);
    }
  };

  onPressIncorrect = () => {
    const { incorrect, lastOne } = this.props;
    this.setBusyState();
    if (lastOne) {
      incorrect();
    } else {
      this.showQuestion();
      setTimeout(incorrect, 250);
    }
  };

  onCardFlipEnd = () => {
    this.setReadyState();
  };

  render(): Element<typeof View> {
    const { side, status } = this.state;
    const { card, deleteCard } = this.props;
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
              <Text style={[styles.cardLabel, styles.cardQuestionLabel]} numberOfLines={5}>
                {card.question}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.cardAnswer]}
              onPress={this.showQuestion}
              disabled={busy}
            >
              <Text style={[styles.cardLabel, styles.cardAnswerLabel]}>{card.answer}</Text>
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
              <BaseTouch
                text="Delete Card"
                onPress={deleteCard}
                color={lightBordeaux}
                inactive={busy}
              />
            </View>
          )
          : (
            <View style={commonStyles.blockBottom}>
              <BaseTouch
                button
                text="Correct"
                backgroundColor={green}
                color={white}
                borderColor={white}
                onPress={this.onPressCorrect}
                inactive={busy}
              />
              <BaseTouch
                button
                text="Incorrect"
                backgroundColor={red}
                color={white}
                borderColor={white}
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
