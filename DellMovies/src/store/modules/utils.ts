import {GenericState} from './types';

export function genericRequest<T extends GenericState>(state: T): T {
  return {
    ...state,
    loading: true,
  };
}

export function genericError<T extends GenericState, StateErrors = any>(
  state: T,
  action: StateErrors,
): T {
  return {
    ...state,
    loading: false,
    errors: action,
  };
}
