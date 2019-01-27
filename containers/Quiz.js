// @flow
import { connect } from 'react-redux';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import { type List } from 'immutable';
import toJS from '../hoc/to-js';
import { BUSY_STATE } from '../states/status';
import { getCardsByIds } from '../selectors/cards';
import { getCardsInDeck } from '../selectors/decks';
import { getStatus } from '../selectors/status';
import {
  addCorrectCard, type AddCorrectCardAction,
  addIncorrectCard, type AddIncorrectCardAction,
  initQuiz, type InitQuizAction,
} from '../actions/quiz';
import {
  setReadyState, type SetReadyStateAction,
  setBusyState, type SetBusyStateAction,
} from '../actions/status';
import Quiz from '../components/Quiz';
import {
  expectList,
  expectString,
} from '../utils/helpers';
import {
  type CardMap,
  type Dispatch,
  type StateMap,
} from '../utils/types';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const mapStateToProps = (state: StateMap, { navigation }: Props): {
  busy: boolean,
  cards: List<CardMap>
} => {
  const { deckId } = navigation.state.params;
  const cardsInDeck: List<string> = expectList(getCardsInDeck(state, deckId));
  return {
    busy: getStatus(state) === BUSY_STATE,
    cards: getCardsByIds(state, cardsInDeck),
  };
};

type Action =
  | AddCorrectCardAction
  | AddIncorrectCardAction
  | InitQuizAction
  | SetBusyStateAction
  | SetReadyStateAction

function mapDispatchToProps(dispatch: Dispatch<Action>, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    addCorrectCard: (cardId: string): void => {
      dispatch(addCorrectCard(expectString(cardId)));
    },
    addIncorrectCard: (cardId: string): void => {
      dispatch(addIncorrectCard(expectString(cardId)));
    },
    initQuiz: (): void => {
      dispatch(initQuiz(expectString(deckId)));
    },
    setBusyState: (): void => {
      dispatch(setBusyState());
    },
    setReadyState: (): void => {
      dispatch(setReadyState());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(Quiz));
