import {REHYDRATE} from 'redux-persist';
import {call, put, all, takeLatest} from 'redux-saga/effects';

import moviesProvider from '../../../lib/movies';
import MoviesActions, {MoviesTypes} from './duck';
import MoviesListDTO from '../../../dtos/movies/MoviesListDTO';





type MoviesParams = ReturnType<typeof MoviesActions.moviesRequest>;
export function* listMovies({payload}: MoviesParams): Generator {
  try {
    const {params} = payload;
    const result: any = yield call(moviesProvider.findMovieList, params);
    const data = result as MoviesListDTO;
    yield put(MoviesActions.moviesSuccess(data));
  } catch (err) {
    const errors = err;
    console.log({errors});
    yield put(MoviesActions.moviesError(errors));
  }
}



export default all([
  takeLatest(MoviesTypes.MOVIES_REQUEST, listMovies),
]);
