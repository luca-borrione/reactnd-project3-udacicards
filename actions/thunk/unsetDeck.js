// @flow
import { dropDeck } from '../../utils/api';
import { removeDeck, type RemoveDeckAction } from '../decks';
import {
  setBusyState, type SetBusyStateAction,
} from '../status';
import {
  type Dispatch,
  type Thunk,
} from '../../utils/types';

export type UnsetDeckAction =
  | SetBusyStateAction
  | RemoveDeckAction

function unsetDeck(
  deckId: string,
): Thunk<UnsetDeckAction> {
  return (dispatch: Dispatch<UnsetDeckAction>): Promise<void> => {
    dispatch(setBusyState());
    return dropDeck(deckId)
      .then((): void => {
        dispatch(removeDeck(deckId));
      });
  };
}

export default unsetDeck;
