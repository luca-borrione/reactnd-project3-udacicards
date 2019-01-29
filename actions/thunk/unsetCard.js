// @flow
import { dropCard } from '../../utils/api';
import { removeCard, type RemoveCardAction } from '../cards';
import { removeCardFromDeck, type RemoveCardFromDeckAction } from '../decks';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import {
  type Dispatch,
  type Thunk,
} from '../../utils/types';

export type UnsetCardAction =
  | SetBusyStateAction
  | SetReadyStateAction
  | RemoveCardAction
  | RemoveCardFromDeckAction

function unsetCard(
  cardId: string,
  deckId: string,
): Thunk<UnsetCardAction> {
  return async (dispatch: Dispatch<UnsetCardAction>): Promise<void> => {
    dispatch(setBusyState());
    await dropCard(cardId);
    dispatch(removeCard(cardId));
    dispatch(removeCardFromDeck(cardId, deckId));
    dispatch(setReadyState());
  };
}

export default unsetCard;
