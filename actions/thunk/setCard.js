// @flow
import { saveCard } from '../../utils/api';
import { addCard, type AddCardAction } from '../cards';
import { addCardToDeck, type AddCardToDeckAction } from '../decks';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import {
  type Card,
  type Dispatch,
  type Thunk,
} from '../../utils/types';

export type SetCardAction =
  | SetBusyStateAction
  | SetReadyStateAction
  | AddCardAction
  | AddCardToDeckAction

function setCard(
  deckId: string,
  question: string,
  answer: string,
): Thunk<SetCardAction> {
  return (dispatch: Dispatch<SetCardAction>): Promise<void> => {
    dispatch(setBusyState());
    return saveCard(deckId, question, answer)
      .then((card: Card): void => {
        dispatch(addCard(card));
        dispatch(addCardToDeck(card.id, deckId));
        dispatch(setReadyState());
      });
  };
}

export default setCard;
