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
import unsetCard, { type UnsetCardAction } from '../actions/thunk/unsetCard';
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
  type Thunk,
} from '../utils/types';

let deckId: string;
let card: CardMap;
const getCardId = (): string => (
  expectString(card.get('id'))
);

const mapStateToProps = (state: StateMap): {
  card: CardMap,
  lastOne: boolean,
} => {
  deckId = getDeckId(state);
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
  | Thunk<UnsetCardAction>

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    correct: (): void => {
      dispatch(addCorrectCard(getCardId()));
      dispatch(increaseCardIndex());
    },
    deleteCard: (): Promise<void> => dispatch(unsetCard(getCardId(), deckId)),
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
