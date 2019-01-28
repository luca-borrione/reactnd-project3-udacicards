// @flow
import { type Action } from '../utils/types';

type SetBusyState = 'status/SET_BUSY_STATE';
type SetErrorState = 'status/SET_ERROR_STATE';
type SetInitState = 'status/SET_INIT_STATE';
type SetSuccessState = 'status/SET_SUCCESS_STATE';
type SetReadyState = 'status/SET_READY_STATE';

export const SET_BUSY_STATE: SetBusyState = 'status/SET_BUSY_STATE';
export const SET_ERROR_STATE: SetErrorState = 'status/SET_ERROR_STATE';
export const SET_INIT_STATE: SetInitState = 'status/SET_INIT_STATE';
export const SET_SUCCESS_STATE: SetSuccessState = 'status/SET_SUCCESS_STATE';
export const SET_READY_STATE: SetReadyState = 'status/SET_READY_STATE';

export type SetBusyStateAction = Action<SetBusyState>;
export type SetErrorStateAction = Action<SetErrorState>;
export type SetInitStateAction = Action<SetInitState>;
export type SetSuccessStateAction = Action<SetSuccessState>;
export type SetReadyStateAction = Action<SetReadyState>;

export type StatusAction =
  | SetBusyStateAction
  | SetErrorStateAction
  | SetInitStateAction
  | SetSuccessStateAction
  | SetReadyStateAction

export const setBusyState = (): SetBusyStateAction => ({
  type: SET_BUSY_STATE,
});

export const setErrorState = (): SetErrorStateAction => ({
  type: SET_ERROR_STATE,
});

export const setInitState = (): SetInitStateAction => ({
  type: SET_INIT_STATE,
});

export const setSuccessState = (): SetSuccessStateAction => ({
  type: SET_SUCCESS_STATE,
});

export const setReadyState = (): SetReadyStateAction => ({
  type: SET_READY_STATE,
});
