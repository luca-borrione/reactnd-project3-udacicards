// @flow
import { connect } from 'react-redux';
import { type List } from 'immutable';
import toJS from '../hoc/to-js';
import { getCardsByIds } from '../selectors/cards';
import { getCardsInDeck } from '../selectors/decks';
import {
  getCardIndex,
  getDeckId,
} from '../selectors/quiz';
import {
  addCorrectCard, type AddCorrectCardAction,
  addIncorrectCard, type AddIncorrectCardAction,
  increaseCardIndex, type IncreaseCardIndexAction,
} from '../actions/quiz';
import QuizCard from '../components/QuizCard';
import {
  expectList,
  expectMap,
  expectString,
} from '../utils/helpers';
import {
  type CardMap,
  type Dispatch,
  type StateMap,
} from '../utils/types';

let card;
const getCardId = (): string => (
  expectString(card.get('id'))
);

const mapStateToProps = (state: StateMap): {
  card: CardMap,
  lastOne: boolean,
} => {
  const deckId: string = getDeckId(state);
  const cardsInDeck: List<string> = expectList(getCardsInDeck(state, deckId));
  const cards: List<CardMap> = getCardsByIds(state, cardsInDeck);
  const cardIndex: number = getCardIndex(state);
  card = expectMap(cards.get(cardIndex));
  return {
    card,
    lastOne: cardIndex === cards.size - 1,
  };
};

type Action =
  | AddCorrectCardAction
  | AddIncorrectCardAction
  | IncreaseCardIndexAction

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    correct: (): void => {
      dispatch(addCorrectCard(getCardId()));
      dispatch(increaseCardIndex());
    },
    incorrect: (): void => {
      dispatch(addIncorrectCard(getCardId()));
      dispatch(increaseCardIndex());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(QuizCard));
