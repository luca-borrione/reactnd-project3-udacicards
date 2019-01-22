// @flow
import { connect } from 'react-redux';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import toJS from '../hoc/to-js';
import { getDeckById } from '../selectors/decks';
import DeckView from '../components/DeckView';
import {
  expectMap,
} from '../utils/helpers';
import {
  type DeckMap,
  type StateMap,
} from '../utils/types';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const mapStateToProps = (state: StateMap, { navigation }: Props): {
  deck: DeckMap,
} => {
  const { deckId } = navigation.state.params;
  return {
    deck: expectMap(getDeckById(state, deckId)),
  };
};

export default connect(
  mapStateToProps,
)(toJS(DeckView));
