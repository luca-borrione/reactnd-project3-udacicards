// @flow
import { type Map, type List } from 'immutable';
import { type DecksAction } from '../actions/decks';
import { type StatusAction } from '../actions/status';


/* Decks - - - -  */

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

/* endof Decks - - - -  */


export type StateKey =
  | 'status'
  | 'decks'
export type StateValue =
  | string
  | Map<string, mixed>
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
  | DecksAction
  | StatusAction

type GetState = () => StateMap
type PromiseAction<T> = Promise<T>
// eslint-disable-next-line no-use-before-define
export type Thunk<T> = (dispatch: Dispatch<T>, getState: GetState) => any
export type Dispatch<T> = (action: T | Thunk<T> | PromiseAction<T> | Array<T>) => any

export type InitialData = {
  decks: Decks
}

/* endof Actions - - - -  */
