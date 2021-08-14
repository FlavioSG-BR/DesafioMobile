import {Reducer} from 'redux';
import {action} from 'typesafe-actions';
import {REHYDRATE} from 'redux-persist';
import MoviesListDTO from '../../../dtos/movies/MoviesListDTO';
import MoviesListParamsDTO from '../../../dtos/movies/MoviesListParamsDTO';

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
  movie: {
      id: 0,
      original_title: '',
      overview: '',
      poster_path: '',
      release_date: '',
      title: '',
      vote_average: 0,
      vote_count: 0,
      backdrop_path: '',
    },
  loading: false,
  errors: {},
};

export enum MoviesTypes {
  SET_LOADING = '@movies/SET_LOADING',
  MOVIES_REQUEST = '@movies/MOVIES_REQUEST',
  MOVIES_SUCCESS = '@movies/MOVIES_SUCCESS',
  MOVIES_ERROR = '@movies/MOVIES_ERROR',
  CLEAR_ERRORS = '@movies/CLEAR_ERRORS',
  CLEAR_DATA = '@movies/CLEAR_DATA',
}

const setLoading = (loading: boolean) =>
  action(MoviesTypes.SET_LOADING, {loading});

export const moviesRequest = (params: MoviesListParamsDTO) =>
  action(MoviesTypes.MOVIES_REQUEST, {params});
const moviesSuccess = (data: MoviesListDTO) =>
  action(MoviesTypes.MOVIES_SUCCESS, {data});
const moviesError = (errors: MoviesError) =>
  action(MoviesTypes.MOVIES_ERROR, {errors});

const clearErrors = () => action(MoviesTypes.CLEAR_ERRORS);

const clearData = () => action(MoviesTypes.CLEAR_DATA);

const Creators = {
  setLoading,
  moviesRequest,
  moviesSuccess,
  moviesError,
  clearErrors,
  clearData,
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
    case MoviesTypes.CLEAR_ERRORS:
      return {...state, errors: {}};
      case MoviesTypes.CLEAR_DATA:
        return {
          ...state, 
          movies_list: {
            page: 1,
            results: [],
            total_pages: 1,
            total_results: 0,
            error: '',
          }, 
          movie: {
            original_title: '',
            overview: '',
            poster_path: '',
            release_date: '',
            title: '',
            vote_average: 0,
            vote_count: 0,
            backdrop_path: '',
          }
        };

    default:
      return state;
  }
};
