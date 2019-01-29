// @flow
import {
  _getCards,
  _getDecks,
  _saveCard,
  _dropCard,
  _saveDeck,
  _dropDeck,
  _getNotificationTimestampAsync,
  _saveNotificationTimestampAsync,
  _removeNotificationTimestampAsync,
} from './_DATA';
import {
  type Deck,
  type Decks,
  type Card,
  type Cards,
  type InitialData,
} from './types';

export const getInitialData = (): Promise<InitialData> => (
  Promise.all([
    (_getCards(): Cards),
    (_getDecks(): Decks),
  ])
    .then(([cards, decks]) => ({
      cards,
      decks,
    }))
);

export const saveDeck = (title: string): Promise<Deck> => (
  _saveDeck({ title })
);

export const dropDeck = (deckId: string): Promise<void> => (
  _dropDeck(deckId)
);

export const saveCard = (deckId: string, question: string, answer: string): Promise<Card> => (
  _saveCard({
    answer,
    deckId,
    question,
  })
);

export const dropCard = (cardId: string): Promise<void> => (
  _dropCard(cardId)
);

export const getNotificationTimestampAsync = (): Promise<number | void> => (
  _getNotificationTimestampAsync()
);

export const saveNotificationTimestampAsync = (timestamp: number): Promise<void> => (
  _saveNotificationTimestampAsync(timestamp)
);

export const removeNotificationTimestampAsync = (): Promise<void> => (
  _removeNotificationTimestampAsync()
);
