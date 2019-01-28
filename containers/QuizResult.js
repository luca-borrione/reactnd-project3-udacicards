// @flow
import { connect } from 'react-redux';
import { type List } from 'immutable';
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

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    restartQuiz: (): void => {
      dispatch(resetQuiz());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizResult);
