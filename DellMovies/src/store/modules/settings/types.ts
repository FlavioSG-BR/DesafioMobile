import SettingsDTO from '../../../dtos/settings/SettingsDTO';
import {StateError} from '../types';

export type SettingsError = StateError<SettingsDTO>;

export interface SettingsState {
  readonly settings: SettingsDTO;
  readonly errors: SettingsError;
}
