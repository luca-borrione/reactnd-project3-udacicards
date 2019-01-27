// @flow
import React, { Component } from 'react';
import {
  NavigationActions,
  type NavigationState,
  type NavigationScreenProp,
} from 'react-navigation';
import CardFlip from 'react-native-card-flip';
import QuizCard from './QuizCard';
import QuizResult from './QuizResult';
import { type Card } from '../utils/types';

const DEFAULT_STATE = {
  index: 0,
  correctCards: new Set(),
  incorrectCards: new Set(),
};

type Props = {
  cards: Array<Card>,
  navigation: NavigationScreenProp<NavigationState>,
};

type State = {
  index: number,
  correctCards: Set<string>,
  incorrectCards: Set<string>,
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

  state = DEFAULT_STATE;

  componentDidMount(): void {
    this.updateTitle();
  }

  getCurrentCard(): Card {
    const { index } = this.state;
    const { cards } = this.props;
    const card: Card | void = cards[index];
    if (card) {
      return card;
    }
    throw new Error('cannot retrieve current card');
  }

  increaseIndex = (callback?: () => void): void => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }), callback);
  }

  addCorrectCard = (callback?: () => void): void => {
    const card: Card = this.getCurrentCard();
    this.setState(prevState => ({
      correctCards: new Set([...prevState.correctCards, card.id]),
    }), callback);
  };

  addIncorrectCard = (callback?: () => void): void => {
    const card: Card = this.getCurrentCard();
    this.setState(prevState => ({
      incorrectCards: new Set([...prevState.incorrectCards, card.id]),
    }), callback);
  };

  backToDeck = (): void => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  }

  restartQuiz = (): void => {
    this.setState(DEFAULT_STATE, this.updateTitle);
  }

  next = (): void => {
    if (this.nextCardExists()) {
      this.goToNextCard();
    } else {
      this.goToResult();
    }
  }

  nextCardExists(): boolean {
    const { index } = this.state;
    const { cards } = this.props;
    return index < cards.length - 1;
  }

  goToNextCard(): void {
    this.increaseIndex(this.updateTitle);
  }

  goToResult() {
    const { navigation } = this.props;
    navigation.setParams({ title: 'Result' });
    this.increaseIndex();
  }

  updateTitle() {
    const { cards, navigation } = this.props;
    const { index } = this.state;
    navigation.setParams({
      title: `card ${index + 1} of ${cards.length}`,
    });
  }

  render() {
    const { index } = this.state;
    const { cards } = this.props;

    if (index >= cards.length) {
      const { correctCards, incorrectCards } = this.state;
      return (
        <QuizResult
          numOfCorrectCards={correctCards.size}
          numOfIncorrectCards={incorrectCards.size}
          backToDeck={this.backToDeck}
          restartQuiz={this.restartQuiz}
        />
      );
    }

    const card: Card = this.getCurrentCard();
    return (
      <QuizCard
        card={card}
        addCorrectCard={this.addCorrectCard}
        addIncorrectCard={this.addIncorrectCard}
        next={this.next}
      />
    );
  }
}

export default Quiz;
