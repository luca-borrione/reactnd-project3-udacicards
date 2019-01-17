// @flow
import {
  INIT_STATE,
} from '../states/status';

// const reducer = (state: string = INIT_STATE, action: StatusAction) => {
const reducer = (state: string = INIT_STATE, action: any) => {
  switch (action.type) {
    default:
      // (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
