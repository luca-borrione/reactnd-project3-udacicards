// @flow
import {
  type Action,
  type Card,
  type Cards,
} from '../utils/types';

type AddCard = 'cards/ADD_CARD';
type InitCards = 'cards/INIT_CARDS';

export const ADD_CARD: AddCard = 'cards/ADD_CARD';
export const INIT_CARDS: InitCards = 'cards/INIT_CARDS';

export type AddCardPayload = {
  card: Card,
};
export type InitCardsPayload = {
  cards: Cards,
};

export type AddCardAction = Action<AddCard, AddCardPayload>;
export type InitCardsAction = Action<InitCards, InitCardsPayload>;

export type CardsAction =
  | AddCardAction
  | InitCardsAction

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
