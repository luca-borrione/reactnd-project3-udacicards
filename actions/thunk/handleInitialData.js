// @flow
import { getInitialData } from '../../utils/api';
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
  | InitDecksAction
  | SetReadyStateAction

function handleInitialData(): Thunk<InitialDataAction> {
  return (dispatch: Dispatch<InitialDataAction>): Promise<void> => {
    dispatch(setBusyState());
    return getInitialData()
      .then(({ decks }: InitialData) => {
        dispatch(initDecks(decks));
        dispatch(setReadyState());
      });
  };
}

export default handleInitialData;
