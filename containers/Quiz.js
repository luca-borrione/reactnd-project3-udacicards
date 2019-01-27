// @flow
import { connect } from 'react-redux';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import { type List } from 'immutable';
import toJS from '../hoc/to-js';
import { getCardsByIds } from '../selectors/cards';
import { getCardsInDeck } from '../selectors/decks';
import Quiz from '../components/Quiz';
import { expectList } from '../utils/helpers';
import {
  type CardMap,
  type StateMap,
} from '../utils/types';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const mapStateToProps = (state: StateMap, { navigation }: Props): {
  cards: List<CardMap>
} => {
  const { deckId } = navigation.state.params;
  const cardsInDeck: List<string> = expectList(getCardsInDeck(state, deckId));
  return {
    cards: getCardsByIds(state, cardsInDeck),
  };
};

export default connect(
  mapStateToProps,
)(toJS(Quiz));
