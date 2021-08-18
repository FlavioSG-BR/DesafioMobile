import {Reducer} from 'redux';
import {action} from 'typesafe-actions';
import GenresListDTO from '../../../dtos/genres/GenresListDTO';
import GenresListParamsDTO from '../../../dtos/genres/GenresListParamsDTO';

import {genericRequest, genericError} from '../utils';
import {GenresState, GenresError} from './types';
const INITIAL_STATE: GenresState = {
  data: {
    genres: [],
    error: {},
  },
  loading: false,
  errors: {},
};

export enum GenresTypes {
  SET_LOADING = '@genres/SET_LOADING',
  GENRES_REQUEST = '@genres/GENRES_REQUEST',
  GENRES_SUCCESS = '@genres/GENRES_SUCCESS',
  GENRES_ERROR = '@genres/GENRES_ERROR',
  CLEAR_ERRORS = '@genres/CLEAR_ERRORS',
  CLEAR_DATA = '@genres/CLEAR_DATA',
}

const setLoading = (loading: boolean) =>
  action(GenresTypes.SET_LOADING, {loading});

export const genresRequest = (params: GenresListParamsDTO) =>
  action(GenresTypes.GENRES_REQUEST, {params});
const genresSuccess = (data: GenresListDTO) =>
  action(GenresTypes.GENRES_SUCCESS, {data});
const genresError = (errors: GenresError) =>
  action(GenresTypes.GENRES_ERROR, {errors});

const clearErrors = () => action(GenresTypes.CLEAR_ERRORS);

const clearData = () => action(GenresTypes.CLEAR_DATA);

const Creators = {
  setLoading,
  genresRequest,
  genresSuccess,
  genresError,
  clearErrors,
  clearData,
};
export default Creators;

export const reducer: Reducer<GenresState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case GenresTypes.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case GenresTypes.GENRES_REQUEST:
      return genericRequest(state);

    case GenresTypes.GENRES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };

    case GenresTypes.GENRES_ERROR:
      return genericError(state, action.payload.errors);

    case GenresTypes.CLEAR_ERRORS:
      return {...state, errors: {}};
    case GenresTypes.CLEAR_DATA:
      return {
        ...state,
        data: {
          genres: [],
        },
      };

    default:
      return state;
  }
};
