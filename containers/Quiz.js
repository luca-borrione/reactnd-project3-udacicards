// @flow
import { connect } from 'react-redux';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import { type List } from 'immutable';
import { getCardsByIds } from '../selectors/cards';
import { getCardsInDeck } from '../selectors/decks';
import { getCardIndex } from '../selectors/quiz';
import {
  addCorrectCard, type AddCorrectCardAction,
  addIncorrectCard, type AddIncorrectCardAction,
  increaseCardIndex, type IncreaseCardIndexAction,
} from '../actions/quiz';
import Quiz from '../components/Quiz';
import { expectList } from '../utils/helpers';
import {
  type CardMap,
  type Dispatch,
  type StateMap,
} from '../utils/types';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const mapStateToProps = (state: StateMap, { navigation }: Props): {
  cardNumber: number,
  cardsLength: number,
  showResult: boolean,
} => {
  const { deckId } = navigation.state.params;
  const cardsInDeck: List<string> = expectList(getCardsInDeck(state, deckId));
  const cards: List<CardMap> = getCardsByIds(state, cardsInDeck);
  const cardIndex: number = getCardIndex(state);
  return {
    cardNumber: cardIndex + 1,
    showResult: cardIndex >= cards.size,
    cardsLength: cards.size,
  };
};

type Action =
  | AddCorrectCardAction
  | AddIncorrectCardAction
  | IncreaseCardIndexAction

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  addCorrectCard: (cardId: string): void => {
    dispatch(addCorrectCard(cardId));
  },
  addIncorrectCard: (cardId: string): void => {
    dispatch(addIncorrectCard(cardId));
  },
  increaseCardIndex: (): void => {
    dispatch(increaseCardIndex());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);
