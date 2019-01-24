// @flow
import { getInitialData } from '../../utils/api';
import { initCards, type InitCardsAction } from '../cards';
import { initDecks, type InitDecksAction } from '../decks';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import {
  type Dispatch,
  type InitialData,
  type Thunk,
} from '../../utils/types';

export type InitialDataAction =
  | SetBusyStateAction
  | InitCardsAction
  | InitDecksAction
  | SetReadyStateAction

function handleInitialData(): Thunk<InitialDataAction> {
  return (dispatch: Dispatch<InitialDataAction>): Promise<void> => {
    dispatch(setBusyState());
    return getInitialData()
      .then(({ cards, decks }: InitialData) => {
        dispatch(initCards(cards));
        dispatch(initDecks(decks));
        dispatch(setReadyState());
      });
  };
}

export default handleInitialData;
