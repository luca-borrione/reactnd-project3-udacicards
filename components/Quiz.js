// @flow
import React, { Component } from 'react';
import {
  NavigationActions,
  type NavigationState,
  type NavigationScreenProp,
} from 'react-navigation';
import CardFlip from 'react-native-card-flip';
import QuizCard from '../containers/QuizCard';
import QuizResult from '../containers/QuizResult';

type Props = {
  cardNumber: number,
  cardsLength: number,
  navigation: NavigationScreenProp<NavigationState>,
  showResult: boolean,
};

class Quiz extends Component<Props> {
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

  componentDidMount(): void {
    this.updateTitle();
  }

  componentDidUpdate(): void {
    this.updateTitle();
  }

  backToDeck = (): void => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  }

  updateTitle = () => {
    const {
      cardNumber,
      cardsLength,
      navigation,
      showResult,
    } = this.props;

    const title: string = showResult
      ? 'Result'
      : `Card ${cardNumber} of ${cardsLength}`;

    if (title !== navigation.state.params.title) {
      navigation.setParams({ title });
    }
  };

  render() {
    const { showResult } = this.props;

    if (showResult) {
      return <QuizResult backToDeck={this.backToDeck} />;
    }

    return <QuizCard />;
  }
}

export default Quiz;
