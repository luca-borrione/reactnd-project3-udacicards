// @flow
import {
  type Action,
  type Deck,
  type Decks,
} from '../utils/types';

type AddDeck = 'decks/ADD_DECK';
type AddCardToDeck = 'decks/ADD_CARD_TO_DECK';
type InitDecks = 'decks/INIT_DECKS';
type RemoveDeck = 'decks/REMOVE_DECK';

export const ADD_DECK: AddDeck = 'decks/ADD_DECK';
export const ADD_CARD_TO_DECK: AddCardToDeck = 'decks/ADD_CARD_TO_DECK';
export const INIT_DECKS: InitDecks = 'decks/INIT_DECKS';
export const REMOVE_DECK: RemoveDeck = 'decks/REMOVE_DECK';

export type AddDeckPayload = {
  deck: Deck,
};
export type AddCardToDeckPayload = {
  cardId: string,
  deckId: string,
};
export type InitDecksPayload = {
  decks: Decks,
};
export type RemoveDeckPayload = {
  deckId: string,
};

export type AddDeckAction = Action<AddDeck, AddDeckPayload>;
export type AddCardToDeckAction = Action<AddCardToDeck, AddCardToDeckPayload>;
export type InitDecksAction = Action<InitDecks, InitDecksPayload>;
export type RemoveDeckAction = Action<RemoveDeck, RemoveDeckPayload>;

export type DecksAction =
  | AddDeckAction
  | AddCardToDeckAction
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

export const addCardToDeck = (
  cardId: string,
  deckId: string,
): AddCardToDeckAction => ({
  type: ADD_CARD_TO_DECK,
  payload: {
    cardId,
    deckId,
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
