// @flow
import { type List } from 'immutable';
import {
  type DeckMap,
  type DecksMap,
  type IDeckMap,
  type StateMap,
} from '../utils/types';
import {
  expectList,
  expectMap,
  expectNumber,
  expectString,
} from '../utils/helpers';

export const deck = (deckMap: DeckMap): IDeckMap => ({
  cards: expectList(deckMap.get('cards')),
  id: expectString(deckMap.get('id')),
  timestamp: expectNumber(deckMap.get('timestamp')),
  title: expectString(deckMap.get('title')),
});

const decks = (state: StateMap): DecksMap => (
  (expectMap(state.get('decks')): DecksMap)
);

/* - - - - - - - */

const descendingByTimestamp = (a: DeckMap, b: DeckMap): number => (
  deck(b).timestamp - deck(a).timestamp
);

export const getDecks = (state: StateMap): List<DeckMap> => (
  decks(state)
    .sort(descendingByTimestamp)
    .toList()
);

export const getDeckById = (state: StateMap, deckId: string): DeckMap | void => (
  decks(state).get(deckId)
);

export const getCardsInDeck = (state: StateMap, deckId: string): List<string> | void => {
  const deckMap: DeckMap | void = getDeckById(state, deckId);
  if (deckMap) {
    return expectList(deckMap.get('cards'));
  }
  return undefined;
};
