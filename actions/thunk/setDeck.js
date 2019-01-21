// @flow
import { saveDeck } from '../../utils/api';
import { addDeck, type AddDeckAction } from '../decks';
import {
  setBusyState, type SetBusyStateAction,
} from '../status';
import {
  type Dispatch,
  type Deck,
  type Thunk,
} from '../../utils/types';

export type SetDeckAction =
  | SetBusyStateAction
  | AddDeckAction

function setDeck(
  title: string,
): Thunk<SetDeckAction> {
  return (dispatch: Dispatch<SetDeckAction>): Promise<Deck> => {
    dispatch(setBusyState());
    return saveDeck(title)
      .then((deck: Deck): Deck => {
        dispatch(addDeck(deck));
        return deck;
      });
  };
}

export default setDeck;
