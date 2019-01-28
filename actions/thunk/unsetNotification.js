// @flow
import {
  removeNotificationTimestampAsync,
} from '../../utils/api';
import { removeTimestamp, type RemoveTimestampAction } from '../notification';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import { cancelAllScheduledNotificationsAsync } from '../../utils/helpers';
import {
  type Dispatch,
  type Thunk,
} from '../../utils/types';

export type UnsetNotificationAction =
  | SetBusyStateAction
  | SetReadyStateAction
  | RemoveTimestampAction

function unsetNotification(): Thunk<UnsetNotificationAction> {
  return async (dispatch: Dispatch<UnsetNotificationAction>): Promise<void> => {
    dispatch(setBusyState());
    await cancelAllScheduledNotificationsAsync();
    await removeNotificationTimestampAsync();
    dispatch(removeTimestamp());
    dispatch(setReadyState());
  };
}

export default unsetNotification;
