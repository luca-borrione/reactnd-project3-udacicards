// @flow
import {
  _getCards,
  _getDecks,
  _saveCard,
  _saveDeck,
  _dropDeck,
  _getNotificationDate,
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

export async function setDeviceNotification() {
  const notificationDate: Date = await _getNotificationDate();
  console.log('>> notificationDate', notificationDate);
}
