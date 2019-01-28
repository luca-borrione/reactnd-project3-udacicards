// @flow
import { expectString } from '../utils/helpers';
import { type StateMap } from '../utils/types';

export const getStatus = (state: StateMap): string => (
  expectString(state.get('status'))
);

export default undefined;
