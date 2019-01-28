// @flow
/* eslint-disable prefer-destructuring */
import { fromJS, type List } from 'immutable';
import {
  type QuizAction,
  ADD_CORRECT_CARD, type AddCorrectCardPayload,
  ADD_INCORRECT_CARD, type AddIncorrectCardPayload,
  INCREASE_CARD_INDEX,
  INIT_QUIZ, type InitQuizPayload, RESET_QUIZ,
} from '../actions/quiz';
import { expectString } from '../utils/helpers';
import {
  type Quiz,
  type QuizMap,
} from '../utils/types';

const getDefaultState = (deckId: string = ''): Quiz => ({
  cardIndex: 0,
  correctCards: [],
  deckId,
  incorrectCards: [],
});

const getDefaultStateMap = (deckId: string = ''): QuizMap => {
  const quiz: Quiz = getDefaultState(deckId);
  return ((fromJS(quiz): any): QuizMap);
};

const reducer = (state: QuizMap = getDefaultStateMap(), action: QuizAction) => {
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

    case INCREASE_CARD_INDEX: {
      // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
      return state.updateIn(
        ['cardIndex'],
        (cardIndex: number) => cardIndex + 1,
      );
    }

    case INIT_QUIZ: {
      const payload: InitQuizPayload | void = action.payload;
      if (payload) {
        const { deckId } = payload;
        return getDefaultStateMap(deckId);
      }
      throw new Error('unexpected empty payload');
    }

    case RESET_QUIZ: {
      const deckId = expectString(state.get('deckId'));
      return getDefaultStateMap(deckId);
    }

    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
