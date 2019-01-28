// @flow
import { connect } from 'react-redux';
import { type List } from 'immutable';
import setNotification, {
  type SetNotificationAction,
} from '../actions/thunk/setNotification';
import unsetNotification, {
  type UnsetNotificationAction,
} from '../actions/thunk/unsetNotification';
import {
  getCorrectCards,
  getIncorrectCards,
} from '../selectors/quiz';
import {
  resetQuiz, type ResetQuizAction,
} from '../actions/quiz';
import QuizResult from '../components/QuizResult';
import {
  type Dispatch,
  type StateMap,
  type Thunk,
} from '../utils/types';

const mapStateToProps = (state: StateMap): {
  correctNumber: number,
  incorrectNumber: number,
} => {
  const correctCards: List<string> = getCorrectCards(state);
  const incorrectCards: List<string> = getIncorrectCards(state);
  return {
    correctNumber: correctCards.size,
    incorrectNumber: incorrectCards.size,
  };
};

type Action =
  | ResetQuizAction
  | Thunk<SetNotificationAction>
  | Thunk<UnsetNotificationAction>

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    restartQuiz: (): void => dispatch(resetQuiz()),
    setNotification: (): Promise<void> => dispatch(setNotification()),
    unsetNotification: (): Promise<void> => dispatch(unsetNotification()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizResult);
