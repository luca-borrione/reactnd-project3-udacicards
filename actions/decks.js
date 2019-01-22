// @flow
import {
  type Action,
  type Deck,
  type Decks,
} from '../utils/types';

type AddDeck = 'decks/ADD_DECK';
type InitDecks = 'decks/INIT_DECKS';
type RemoveDeck = 'decks/REMOVE_DECK';

export const ADD_DECK: AddDeck = 'decks/ADD_DECK';
export const INIT_DECKS: InitDecks = 'decks/INIT_DECKS';
export const REMOVE_DECK: RemoveDeck = 'decks/REMOVE_DECK';

export type AddDeckPayload = {
  deck: Deck
};
export type InitDecksPayload = {
  decks: Decks
};
export type RemoveDeckPayload = {
  deckId: string
};

export type AddDeckAction = Action<AddDeck, AddDeckPayload>;
export type InitDecksAction = Action<InitDecks, InitDecksPayload>;
export type RemoveDeckAction = Action<RemoveDeck, RemoveDeckPayload>;

export type DecksAction =
  | AddDeckAction
  | InitDecksAction
  | RemoveDeckAction

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

export const removeDeck = (
  deckId: string,
): RemoveDeckAction => ({
  type: REMOVE_DECK,
  payload: {
    deckId,
  },
});
