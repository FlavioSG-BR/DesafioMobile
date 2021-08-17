import MoviesDTO from '../../../dtos/movies/MoviesDTO';
import MoviesListDTO from '../../../dtos/movies/MoviesListDTO';
import {StateError} from '../types';

export type MoviesError = StateError<MoviesDTO>;

export interface MoviesState {
  readonly movies_list: MoviesListDTO;
  readonly loading: boolean;
  readonly errors: MoviesError;
}
