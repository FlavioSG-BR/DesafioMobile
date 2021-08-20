import {Reducer} from 'redux';
import {action} from 'typesafe-actions';
import MoviesListDTO from '../../../dtos/movies/MoviesListDTO';
import MoviesListParamsDTO from '../../../dtos/movies/MoviesListParamsDTO';
import MoviesDTO from '../../../dtos/movies/MoviesDTO';
import SearchMovieParamsDTO from '../../../dtos/movies/SearchMovieParamsDTO';
import MoviesFiltersDTO from '../../../dtos/movies/MoviesFiltersDTO';

import {genericRequest, genericError} from '../utils';
import {MoviesState, MoviesError} from './types';
const INITIAL_STATE: MoviesState = {
  movies_list: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
    error: '',
  },
  filters: {
    genres: [],
  },
  loading: false,
  errors: {},
};

export enum MoviesTypes {
  SET_LOADING = '@movies/SET_LOADING',
  MOVIES_REQUEST = '@movies/MOVIES_REQUEST',
  MOVIES_SUCCESS = '@movies/MOVIES_SUCCESS',
  MOVIES_ERROR = '@movies/MOVIES_ERROR',
  MOVIE_REQUEST = '@movies/MOVIE_REQUEST',
  MOVIE_SUCCESS = '@movies/MOVIE_SUCCESS',
  MOVIE_ERROR = '@movies/MOVIE_ERROR',
  CLEAR_ERRORS = '@movies/CLEAR_ERRORS',
  CLEAR_DATA = '@movies/CLEAR_DATA',
  SET_FILTERS = '@movies/SET_FILTERS',
  CLEAR_FILTERS = '@movies/CLEAR_FILTERS',
}

const setLoading = (loading: boolean) =>
  action(MoviesTypes.SET_LOADING, {loading});

export const moviesRequest = (params: MoviesListParamsDTO) =>
  action(MoviesTypes.MOVIES_REQUEST, {params});
const moviesSuccess = (data: MoviesListDTO) =>
  action(MoviesTypes.MOVIES_SUCCESS, {data});
const moviesError = (errors: MoviesError) =>
  action(MoviesTypes.MOVIES_ERROR, {errors});

const movieRequest = (params: SearchMovieParamsDTO) =>
  action(MoviesTypes.MOVIE_REQUEST, {params});
const movieSuccess = (data: MoviesDTO) =>
  action(MoviesTypes.MOVIE_SUCCESS, {data});
const movieError = (errors: MoviesError) =>
  action(MoviesTypes.MOVIE_ERROR, {errors});

const setFilters = (data: MoviesFiltersDTO) =>
  action(MoviesTypes.SET_FILTERS, data);

const clearErrors = () => action(MoviesTypes.CLEAR_ERRORS);

const clearFilters = () => action(MoviesTypes.CLEAR_FILTERS);

const clearData = () => action(MoviesTypes.CLEAR_DATA);

const Creators = {
  setLoading,
  moviesRequest,
  moviesSuccess,
  moviesError,
  movieRequest,
  movieSuccess,
  movieError,
  setFilters,
  clearErrors,
  clearData,
  clearFilters,
};
export default Creators;

export const reducer: Reducer<MoviesState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case MoviesTypes.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case MoviesTypes.MOVIES_REQUEST:
      return genericRequest(state);

    case MoviesTypes.MOVIES_SUCCESS:
      return {
        ...state,
        movies_list: action.payload.data,
        loading: false,
      };

    case MoviesTypes.MOVIES_ERROR:
      return genericError(state, action.payload.errors);
    case MoviesTypes.MOVIE_REQUEST:
      return genericRequest(state);

    case MoviesTypes.MOVIE_SUCCESS:
      return {
        ...state,
        movies_list: action.payload.data,
        loading: false,
      };

    case MoviesTypes.SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
        loading: false,
      };

    case MoviesTypes.MOVIE_ERROR:
      return genericError(state, action.payload.errors);
    case MoviesTypes.CLEAR_ERRORS:
      return {...state, errors: {}};
    case MoviesTypes.CLEAR_DATA:
      return INITIAL_STATE;
    case MoviesTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          genres: [],
        },
      };

    default:
      return state;
  }
};
