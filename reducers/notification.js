// @flow
/* eslint-disable prefer-destructuring */
import {
  type NotificationAction,
  ADD_TIMESTAMP, type AddTimestampPayload,
  REMOVE_TIMESTAMP,
} from '../actions/notification';

const reducer = (state: number = 0, action: NotificationAction) => {
  switch (action.type) {
    case ADD_TIMESTAMP: {
      const payload: AddTimestampPayload | void = action.payload;
      if (payload) {
        const { timestamp } = payload;
        return timestamp;
      }
      throw new Error('unexpected empty payload');
    }

    case REMOVE_TIMESTAMP: {
      return 0;
    }

    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
