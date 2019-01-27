// @flow
import { saveDeck } from '../../utils/api';
import { addDeck, type AddDeckAction } from '../decks';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import {
  type Dispatch,
  type Deck,
  type Thunk,
} from '../../utils/types';

export type SetDeckAction =
  | SetBusyStateAction
  | SetReadyStateAction
  | AddDeckAction

function setDeck(
  title: string,
): Thunk<SetDeckAction> {
  return (dispatch: Dispatch<SetDeckAction>): Promise<Deck> => {
    dispatch(setBusyState());
    return saveDeck(title)
      .then((deck: Deck): Deck => {
        dispatch(addDeck(deck));
        dispatch(setReadyState());
        return deck;
      });
  };
}

export default setDeck;
