// @flow
import { connect } from 'react-redux';
import { BUSY_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import setDeck, { type SetDeckAction } from '../actions/thunk/setDeck';
import AddDeck from '../components/AddDeck';
import {
  type Dispatch,
  type StateMap,
  type Thunk,
  type Deck,
} from '../utils/types';

const mapStateToProps = (state: StateMap): {
  busy: boolean,
} => ({
  busy: getStatus(state) === BUSY_STATE,
});

type Action =
  | Thunk<SetDeckAction>

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setDeck: (title: string): Promise<Deck> => (
    dispatch(setDeck(title))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddDeck);
