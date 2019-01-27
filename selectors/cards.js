// @flow
import { type List } from 'immutable';
import {
  type CardMap,
  type CardsMap,
  type ICardMap,
  type StateMap,
} from '../utils/types';
import {
  expectMap,
  expectNumber,
  expectString,
} from '../utils/helpers';

export const card = (cardMap: CardMap): ICardMap => ({
  answer: expectString(cardMap.get('answer')),
  deckId: expectString(cardMap.get('deckId')),
  id: expectString(cardMap.get('id')),
  question: expectString(cardMap.get('question')),
  timestamp: expectNumber(cardMap.get('timestamp')),
});

const cards = (state: StateMap): CardsMap => (
  (expectMap(state.get('cards')): CardsMap)
);

/* - - - - - - - */

const ascendingByTimestamp = (a: CardMap, b: CardMap): number => (
  card(a).timestamp - card(b).timestamp
);

export const getCardById = (state: StateMap, cardId: string): CardMap | void => (
  cards(state).get(cardId)
);

export const getCardsByIds = (state: StateMap, cardIds: List<string>): List<CardMap> => (
  cards(state)
    .filter(card => cardIds.includes(expectString(card.get('id')))) // eslint-disable-line no-shadow
    .sort(ascendingByTimestamp)
    .toList()
);
