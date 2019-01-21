// @flow
import { connect } from 'react-redux';
import { BUSY_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import setDeck, { type SetDeckAction } from '../actions/thunk/setDeck';
import { setReadyState, type SetReadyStateAction } from '../actions/status';
import AddDeck from '../components/AddDeck';
import {
  type Dispatch,
  type StateMap,
  type Thunk,
  type Deck,
} from '../utils/types';

type Action =
  | Thunk<SetDeckAction>
  | SetReadyStateAction

const mapStateToProps = (state: StateMap): {
  busy: boolean,
} => ({
  busy: getStatus(state) === BUSY_STATE,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setDeck: (title: string): Promise<Deck> => (
    dispatch(setDeck(title))
  ),
  setReadyState: (): void => (
    dispatch(setReadyState())
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddDeck);
