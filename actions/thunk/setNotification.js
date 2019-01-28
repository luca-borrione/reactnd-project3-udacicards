// @flow
import {
  getNotificationTimestampAsync,
  saveNotificationTimestampAsync,
} from '../../utils/api';
import { addTimestamp, type AddTimestampAction } from '../notification';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import { scheduleLocalNotificationAsync } from '../../utils/helpers';
import {
  type Dispatch,
  type Thunk,
} from '../../utils/types';

export type SetNotificationAction =
  | SetBusyStateAction
  | SetReadyStateAction
  | AddTimestampAction

function setNotification(): Thunk<SetNotificationAction> {
  return async (dispatch: Dispatch<SetNotificationAction>): Promise<void> => {
    dispatch(setBusyState());
    const currentTimestamp: number | void = await getNotificationTimestampAsync();
    if (currentTimestamp) {
      dispatch(addTimestamp(currentTimestamp));
    } else {
      const scheduledTimestamnp: number | void = await scheduleLocalNotificationAsync();
      if (scheduledTimestamnp) {
        await saveNotificationTimestampAsync(scheduledTimestamnp);
        dispatch(addTimestamp(scheduledTimestamnp));
      }
    }
    dispatch(setReadyState());
  };
}

export default setNotification;
