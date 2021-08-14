import {Reducer} from 'redux';
import {action} from 'typesafe-actions';
import {REHYDRATE} from 'redux-persist';


import {SettingsState} from './types';

const INITIAL_STATE: SettingsState = {
  settings: {
    font_size: 12,
  },
  errors: {},
};

export enum SettingsType {
  SET_FONT_SIZE = '@settings/SET_FONT_SIZE',
}

const setFontSize = (font_size: number) =>
  action(SettingsType.SET_FONT_SIZE, {font_size});

const Creators = {
  setFontSize,
};
export default Creators;

export const reducer: Reducer<SettingsState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case SettingsType.SET_FONT_SIZE:
      return {...state, settings:{font_size: action.payload.loading} };
    default:
      return state;
  }
};
