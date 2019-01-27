// @flow
/* eslint-disable prefer-destructuring */
import { fromJS, Map, type List } from 'immutable';
import {
  type QuizAction,
  ADD_CORRECT_CARD, type AddCorrectCardPayload,
  ADD_INCORRECT_CARD, type AddIncorrectCardPayload,
  INIT_QUIZ, type InitQuizPayload,
} from '../actions/quiz';
import {
  type Quiz,
  type QuizMap,
} from '../utils/types';

const formatQuiz = (deckId: string): Quiz => ({
  cardIndex: 0,
  correctCards: [],
  deckId,
  incorrectCards: [],
});

const reducer = (state: QuizMap = new Map(), action: QuizAction) => {
  switch (action.type) {
    case ADD_CORRECT_CARD: {
      const payload: AddCorrectCardPayload | void = action.payload;
      if (payload) {
        const { cardId } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.updateIn(
          ['correctCards'],
          (list: List<string>) => list.push(cardId),
        );
      }
      throw new Error('unexpected empty payload');
    }

    case ADD_INCORRECT_CARD: {
      const payload: AddIncorrectCardPayload | void = action.payload;
      if (payload) {
        const { cardId } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.updateIn(
          ['incorrectCards'],
          (list: List<string>) => list.push(cardId),
        );
      }
      throw new Error('unexpected empty payload');
    }

    case INIT_QUIZ: {
      const payload: InitQuizPayload | void = action.payload;
      if (payload) {
        const { deckId } = payload;
        const quiz: Quiz = formatQuiz(deckId);
        const quizMap: QuizMap = ((fromJS(quiz): any): QuizMap);
        return quizMap;
      }
      throw new Error('unexpected empty payload');
    }

    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
