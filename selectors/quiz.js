// @flow
import { type List } from 'immutable';
import {
  expectList,
  expectMap,
  expectNumber,
  expectString,
} from '../utils/helpers';
import {
  type QuizMap,
  type StateMap,
} from '../utils/types';

const quiz = (state: StateMap): QuizMap => (
  (expectMap(state.get('quiz')): QuizMap)
);

/* - - - - - - - */

export const getDeckId = (state: StateMap): string => (
  expectString(quiz(state).get('deckId'))
);

export const getCardIndex = (state: StateMap): number => (
  expectNumber(quiz(state).get('cardIndex'))
);

export const getCorrectCards = (state: StateMap): List<string> => (
  expectList(quiz(state).get('correctCards'))
);

export const getIncorrectCards = (state: StateMap): List<string> => (
  expectList(quiz(state).get('incorrectCards'))
);
