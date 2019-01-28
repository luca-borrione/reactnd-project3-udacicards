// @flow
import {
  type Action,
} from '../utils/types';

type AddCorrectCard = 'quiz/ADD_CORRECT_CARD';
type AddIncorrectCard = 'quiz/ADD_INCORRECT_CARD';
type IncreaseCardIndex = 'quiz/INCREASE_CARD_INDEX';
type InitQuiz = 'quiz/INIT_QUIZ';
type ResetQuiz = 'quiz/RESET_QUIZ';

export const ADD_CORRECT_CARD: AddCorrectCard = 'quiz/ADD_CORRECT_CARD';
export const ADD_INCORRECT_CARD: AddIncorrectCard = 'quiz/ADD_INCORRECT_CARD';
export const INCREASE_CARD_INDEX: IncreaseCardIndex = 'quiz/INCREASE_CARD_INDEX';
export const INIT_QUIZ: InitQuiz = 'quiz/INIT_QUIZ';
export const RESET_QUIZ: ResetQuiz = 'quiz/RESET_QUIZ';

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
export type IncreaseCardIndexAction = Action<IncreaseCardIndex>;
export type InitQuizAction = Action<InitQuiz, InitQuizPayload>;
export type ResetQuizAction = Action<ResetQuiz>;

export type QuizAction =
  | AddCorrectCardAction
  | AddIncorrectCardAction
  | IncreaseCardIndexAction
  | InitQuizAction
  | ResetQuizAction

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

export const increaseCardIndex = (): IncreaseCardIndexAction => ({
  type: INCREASE_CARD_INDEX,
});

export const initQuiz = (
  deckId: string,
): InitQuizAction => ({
  type: INIT_QUIZ,
  payload: {
    deckId,
  },
});

export const resetQuiz = (): ResetQuizAction => ({
  type: RESET_QUIZ,
});
