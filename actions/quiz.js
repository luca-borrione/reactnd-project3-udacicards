// @flow
import {
  type Action,
} from '../utils/types';

type AddCorrectCard = 'quiz/ADD_CORRECT_CARD';
type AddIncorrectCard = 'quiz/ADD_INCORRECT_CARD';
type InitQuiz = 'quiz/INIT_QUIZ';

export const ADD_CORRECT_CARD: AddCorrectCard = 'quiz/ADD_CORRECT_CARD';
export const ADD_INCORRECT_CARD: AddIncorrectCard = 'quiz/ADD_INCORRECT_CARD';
export const INIT_QUIZ: InitQuiz = 'quiz/INIT_QUIZ';

export type AddCorrectCardPayload = {
  cardId: string,
};
export type AddIncorrectCardPayload = {
  cardId: string,
};
export type InitQuizPayload = {
  deckId: string,
};

export type AddCorrectCardAction = Action<AddCorrectCard, AddCorrectCardPayload>;
export type AddIncorrectCardAction = Action<AddIncorrectCard, AddIncorrectCardPayload>;
export type InitQuizAction = Action<InitQuiz, InitQuizPayload>;

export type QuizAction =
  | AddCorrectCardAction
  | AddIncorrectCardAction
  | InitQuizAction

export const addCorrectCard = (
  cardId: string,
): AddCorrectCardAction => ({
  type: ADD_CORRECT_CARD,
  payload: {
    cardId,
  },
});

export const addIncorrectCard = (
  cardId: string,
): AddIncorrectCardAction => ({
  type: ADD_INCORRECT_CARD,
  payload: {
    cardId,
  },
});

export const initQuiz = (
  deckId: string,
): InitQuizAction => ({
  type: INIT_QUIZ,
  payload: {
    deckId,
  },
});
