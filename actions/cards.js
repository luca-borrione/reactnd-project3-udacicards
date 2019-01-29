// @flow
import {
  type Action,
  type Card,
  type Cards,
} from '../utils/types';

type AddCard = 'cards/ADD_CARD';
type InitCards = 'cards/INIT_CARDS';
type RemoveCard = 'cards/REMOVE_CARD';

export const ADD_CARD: AddCard = 'cards/ADD_CARD';
export const INIT_CARDS: InitCards = 'cards/INIT_CARDS';
export const REMOVE_CARD: RemoveCard = 'cards/REMOVE_CARD';

export type AddCardPayload = {
  card: Card,
};
export type InitCardsPayload = {
  cards: Cards,
};
export type RemoveCardPayload = {
  cardId: string,
};

export type AddCardAction = Action<AddCard, AddCardPayload>;
export type InitCardsAction = Action<InitCards, InitCardsPayload>;
export type RemoveCardAction = Action<RemoveCard, RemoveCardPayload>;

export type CardsAction =
  | AddCardAction
  | InitCardsAction
  | RemoveCardAction

export const addCard = (
  card: Card,
): AddCardAction => ({
  type: ADD_CARD,
  payload: {
    card,
  },
});

export const initCards = (
  cards: Cards,
): InitCardsAction => ({
  type: INIT_CARDS,
  payload: {
    cards,
  },
});

export const removeCard = (
  cardId: string,
): RemoveCardAction => ({
  type: REMOVE_CARD,
  payload: {
    cardId,
  },
});
