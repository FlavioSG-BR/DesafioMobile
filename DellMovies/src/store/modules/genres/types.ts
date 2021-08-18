import GenresDTO from '../../../dtos/genres/GenresDTO';
import GenresListDTO from '../../../dtos/genres/GenresListDTO';
import {StateError} from '../types';

export type GenresError = StateError<GenresDTO>;

export interface GenresState {
  readonly data: GenresListDTO;
  readonly loading: boolean;
  readonly errors: GenresError;
}
