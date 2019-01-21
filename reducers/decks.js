// @flow
/* eslint-disable prefer-destructuring */

import { fromJS, Map } from 'immutable';
import {
  type DecksAction,
  ADD_DECK, type AddDeckPayload,
  INIT_DECKS, type InitDecksPayload,
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

    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
