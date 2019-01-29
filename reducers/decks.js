// @flow
/* eslint-disable prefer-destructuring */
import {
  fromJS,
  type List,
  Map,
} from 'immutable';
import {
  type DecksAction,
  ADD_DECK, type AddDeckPayload,
  ADD_CARD_TO_DECK, type AddCardToDeckPayload,
  INIT_DECKS, type InitDecksPayload,
  REMOVE_CARD_FROM_DECK, type RemoveCardFromDeckPayload,
  REMOVE_DECK, type RemoveDeckPayload,
} from '../actions/decks';
import {
  type DeckMap,
  type DecksMap,
} from '../utils/types';

const reducer = (state: DecksMap = new Map(), action: DecksAction) => {
  switch (action.type) {
    case ADD_DECK: {
      const payload: AddDeckPayload | void = action.payload;
      if (payload) {
        const { deck } = payload;
        const deckMap: DeckMap = ((fromJS(deck): any): DeckMap);
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.merge({ [deck.id]: deckMap });
      }
      throw new Error('unexpected empty payload');
    }

    case ADD_CARD_TO_DECK: {
      const payload: AddCardToDeckPayload | void = action.payload;
      if (payload) {
        const { cardId, deckId } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.updateIn(
          [deckId, 'cards'],
          (list: List<string>) => list.push(cardId),
        );
      }
      throw new Error('unexpected empty payload');
    }

    case INIT_DECKS: {
      const payload: InitDecksPayload | void = action.payload;
      if (payload) {
        const { decks } = payload;
        const decksMap: DecksMap = ((fromJS(decks): any): DecksMap);
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.merge(decksMap);
      }
      throw new Error('unexpected empty payload');
    }

    case REMOVE_CARD_FROM_DECK: {
      const payload: RemoveCardFromDeckPayload | void = action.payload;
      if (payload) {
        const { cardId, deckId } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.updateIn(
          [deckId, 'cards'],
          (list: List<string>) => list.delete(list.indexOf(cardId)),
        );
      }
      throw new Error('unexpected empty payload');
    }

    case REMOVE_DECK: {
      const payload: RemoveDeckPayload | void = action.payload;
      if (payload) {
        const { deckId } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.delete(deckId);
      }
      throw new Error('unexpected empty payload');
    }

    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
