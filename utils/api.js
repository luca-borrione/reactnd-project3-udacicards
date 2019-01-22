// @flow
import {
  _getDecks,
  _saveDeck,
  _dropDeck,
} from './_DATA';
import {
  type Deck,
  type Decks,
  type InitialData,
} from './types';

export const getInitialData = (): Promise<InitialData> => (
  Promise.all([
    (_getDecks(): Decks),
  ])
    .then(([decks]) => ({
      decks,
    }))
);

export function saveDeck(title: string): Promise<Deck> {
  return _saveDeck({ title });
}

export function dropDeck(deckId: string): Promise<void> {
  return _dropDeck(deckId);
}

export default undefined;
