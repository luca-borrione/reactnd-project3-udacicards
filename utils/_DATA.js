// @flow
/* eslint-disable no-underscore-dangle */
import { AsyncStorage } from 'react-native';
import {
  type Deck,
  type Decks,
  type UnformattedDeck,
} from './types';

export const DECKS_STORAGE_KEY = 'UdaciCards:decks';

export function _getDecks(): Promise<Decks> {
  window.myAsyncStorage = AsyncStorage;// TODO: REMOVE ME
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse);
}

function generateUID(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const formatDeck = ({ title }: UnformattedDeck): Deck => ({
  id: generateUID(),
  cards: [],
  title,
});

export function _saveDeck(unformattedDeck: UnformattedDeck): Promise<Deck> {
  const deck: Deck = formatDeck(unformattedDeck);
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck,
  })).then(() => (deck));
}

export function clear() {
  return AsyncStorage.clear();
}
