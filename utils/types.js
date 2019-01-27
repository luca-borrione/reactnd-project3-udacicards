// @flow
import { type Map, type List } from 'immutable';
import { type CardsAction } from '../actions/cards';
import { type DecksAction } from '../actions/decks';
import { type QuizAction } from '../actions/quiz';
import { type StatusAction } from '../actions/status';


/* Decks - - - - */
export type UnformattedDeck = {
  title: string,
};

export type Deck = {
  cards: Array<string>,
  id: string,
  timestamp: number,
  title: string,
};
export type IDeckMap = {
  cards: List<string>,
  id: string,
  timestamp: number,
  title: string,
}
export type DeckKey =
  | 'cards'
  | 'id'
  | 'timestamp'
  | 'title'
export type DeckValue =
  | string
  | number
  | List<string>
export type DeckMap = Map<DeckKey, DeckValue>;

export type Decks = {
  [key: string]: Deck
};
export type DecksMap = Map<string, DeckMap>;
/* endof Decks - - - - */


/* Cards - - - - */
export type UnformattedCard = {
  answer: string,
  deckId: string,
  question: string,
};
export type Card = {
  answer: string,
  deckId: string,
  id: string,
  question: string,
  timestamp: number,
};
export type ICardMap = {
  answer: string,
  deckId: string,
  id: string,
  question: string,
  timestamp: number,
};
export type CardKey =
  | 'answer'
  | 'deckId'
  | 'id'
  | 'question'
  | 'timestamp'
export type CardValue =
  | string
  | number
export type CardMap = Map<CardKey, CardValue>;

export type Cards = {
  [key: string]: Card
};
export type CardsMap = Map<string, CardMap>;
/* endof Cards - - - - */


/* Quiz - - - - */
export type Quiz = {
  cardIndex: number,
  correctCards: Array<string>,
  deckId: string,
  incorrectCards: Array<string>,
};
export type IQuizMap = {
  cardIndex: number,
  correctCards: List<string>,
  deskId: string,
  incorrectCards: List<string>,
};
export type QuizKey =
  | 'cardIndex'
  | 'correctCards'
  | 'deckId'
  | 'incorrectCards'
export type QuizValue =
  | number
  | string
  | List<string>
export type QuizMap = Map<QuizKey, QuizValue>;
/* endof Quiz - - - - */

export type StateKey =
  | 'cards'
  | 'decks'
  | 'quiz'
  | 'status'
export type StateValue =
  | string
  | Map<string, mixed>
  // | CardsMap
  // | DecksMap;
  // FIXME: see https://github.com/facebook/flow/issues/7308
export type StateMap = Map<StateKey, StateValue>;


/* Actions - - - -  */
// see https://flow.org/en/docs/react/redux/#typing-redux-thunk-actions-

export type Action<T, P = void> = {
  type: T,
  payload?: P
}

export type StoreAction =
  | CardsAction
  | DecksAction
  | QuizAction
  | StatusAction

type GetState = () => StateMap
type PromiseAction<T> = Promise<T>
// eslint-disable-next-line no-use-before-define
export type Thunk<T> = (dispatch: Dispatch<T>, getState: GetState) => any
export type Dispatch<T> = (action: T | Thunk<T> | PromiseAction<T> | Array<T>) => any

export type InitialData = {
  cards: Cards,
  decks: Decks
}

/* endof Actions - - - -  */
