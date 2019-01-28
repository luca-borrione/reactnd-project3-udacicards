// @flow
import { type Action } from '../utils/types';

type AddTimestamp = 'notification/ADD_TIMESTAMP';
type RemoveTimestamp = 'notification/REMOVE_TIMESTAMP';

export const ADD_TIMESTAMP: AddTimestamp = 'notification/ADD_TIMESTAMP';
export const REMOVE_TIMESTAMP: RemoveTimestamp = 'notification/REMOVE_TIMESTAMP';

export type AddTimestampPayload = {
  timestamp: number,
};

export type AddTimestampAction = Action<AddTimestamp, AddTimestampPayload>;
export type RemoveTimestampAction = Action<RemoveTimestamp>;

export type NotificationAction =
  | AddTimestampAction
  | RemoveTimestampAction

export const addTimestamp = (
  timestamp: number,
): AddTimestampAction => ({
  type: ADD_TIMESTAMP,
  payload: {
    timestamp,
  },
});

export const removeTimestamp = (): RemoveTimestampAction => ({
  type: REMOVE_TIMESTAMP,
});
