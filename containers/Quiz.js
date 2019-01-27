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
  setReadyState, type SetReadyStateAction,
  setBusyState, type SetBusyStateAction,
} from '../actions/status';
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
  | SetBusyStateAction
  | SetReadyStateAction

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
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
