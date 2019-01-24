// @flow
/* eslint-disable no-underscore-dangle */
import { AsyncStorage } from 'react-native';
import {
  type Deck,
  type Decks,
  type UnformattedDeck,
  type Card,
  type Cards,
  type UnformattedCard,
} from './types';

export const CARDS_STORAGE_KEY = 'UdaciCards:cards';
export const DECKS_STORAGE_KEY = 'UdaciCards:decks';

export function _getCards(): Promise<Cards> {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(JSON.parse);
}

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
  timestamp: Date.now(),
  title,
});

export function _saveDeck(unformattedDeck: UnformattedDeck): Promise<Deck> {
  const deck: Deck = formatDeck(unformattedDeck);
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck,
  })).then(() => (deck));
}

export function _dropDeck(deckId: string): Promise<void> {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(async (results) => {
      const data = JSON.parse(results);
      data[deckId] = undefined;
      delete data[deckId];
      await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    });
}

const formatCard = ({
  answer,
  deckId,
  question,
}: UnformattedCard): Card => ({
  answer,
  id: generateUID(),
  deckId,
  question,
  timestamp: Date.now(),
});

export const _saveCard = async (unformattedCard: UnformattedCard): Promise<Card> => {
  const card: Card = formatCard(unformattedCard);
  await AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
    [card.id]: card,
  }));
  const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const data = JSON.parse(results);
  data[card.deckId].cards.push(card.id);
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  return card;
};
