// @flow
import { connect } from 'react-redux';
import { BUSY_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import setCard, { type SetCardAction } from '../actions/thunk/setCard';
import { setReadyState, type SetReadyStateAction } from '../actions/status';
import AddCard from '../components/AddCard';
import {
  type Dispatch,
  type StateMap,
  type Thunk,
} from '../utils/types';

const mapStateToProps = (state: StateMap): {
  busy: boolean,
} => ({
  busy: getStatus(state) === BUSY_STATE,
});

type Action =
  | Thunk<SetCardAction>
  | SetReadyStateAction

function mapDispatchToProps(dispatch: Dispatch<Action>, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    addCard: (question: string, answer: string): Promise<void> => (
      dispatch(setCard(deckId, question, answer))
    ),
    setReadyState: (): void => (
      dispatch(setReadyState())
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard);
