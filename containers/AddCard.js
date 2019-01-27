// @flow
import { connect } from 'react-redux';
import { BUSY_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import setCard, { type SetCardAction } from '../actions/thunk/setCard';
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

function mapDispatchToProps(dispatch: Dispatch<Action>, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    addCard: (question: string, answer: string): Promise<void> => (
      dispatch(setCard(deckId, question, answer))
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard);
