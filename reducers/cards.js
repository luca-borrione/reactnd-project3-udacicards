// @flow
/* eslint-disable prefer-destructuring */
import { fromJS, Map } from 'immutable';
import {
  type CardsAction,
  ADD_CARD, type AddCardPayload,
  INIT_CARDS, type InitCardsPayload,
} from '../actions/cards';
import {
  type CardMap,
  type CardsMap,
} from '../utils/types';

const reducer = (state: CardsMap = new Map(), action: CardsAction) => {
  switch (action.type) {
    case ADD_CARD: {
      const payload: AddCardPayload | void = action.payload;
      if (payload) {
        const { card } = payload;
        const cardMap: CardMap = ((fromJS(card): any): CardMap);
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.merge({ [card.id]: cardMap });
      }
      throw new Error('unexpected empty payload');
    }

    case INIT_CARDS: {
      const payload: InitCardsPayload | void = action.payload;
      if (payload) {
        const { cards } = payload;
        const cardsMap: CardsMap = ((fromJS(cards): any): CardsMap);
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.merge(cardsMap);
      }
      throw new Error('unexpected empty payload');
    }

    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
