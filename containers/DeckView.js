// @flow
import { connect } from 'react-redux';
import { type NavigationState, type NavigationScreenProp } from 'react-navigation';
import { BUSY_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import toJS from '../hoc/to-js';
import unsetDeck, { type UnsetDeckAction } from '../actions/thunk/unsetDeck';
import { getDeckById } from '../selectors/decks';
import DeckView from '../components/DeckView';
import {
  type Dispatch,
  type Thunk,
  type DeckMap,
  type StateMap,
} from '../utils/types';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

const mapStateToProps = (state: StateMap, { navigation }: Props): {
  busy: boolean,
  deck: DeckMap | void,
} => {
  const { deckId } = navigation.state.params;
  return {
    busy: getStatus(state) === BUSY_STATE,
    deck: getDeckById(state, deckId),
  };
};

type Action =
  | Thunk<UnsetDeckAction>

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  unsetDeck: (deckId: string): Promise<void> => (
    dispatch(unsetDeck(deckId))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(DeckView));
