// @flow
import {
  type Action,
  type Deck,
  type Decks,
} from '../utils/types';

type AddDeck = 'decks/ADD_DECK';
type InitDecks = 'decks/INIT_DECKS';

export const ADD_DECK: AddDeck = 'decks/ADD_DECK';
export const INIT_DECKS: InitDecks = 'decks/INIT_DECKS';

export type AddDeckPayload = {
  deck: Deck
};
export type InitDecksPayload = {
  decks: Decks
};

export type AddDeckAction = Action<AddDeck, AddDeckPayload>;
export type InitDecksAction = Action<InitDecks, InitDecksPayload>;

export type DecksAction =
  | AddDeckAction
  | InitDecksAction

export const addDeck = (
  deck: Deck,
): AddDeckAction => ({
  type: ADD_DECK,
  payload: {
    deck,
  },
});

export const initDecks = (
  decks: Decks,
): InitDecksAction => ({
  type: INIT_DECKS,
  payload: {
    decks,
  },
});

export default undefined;
