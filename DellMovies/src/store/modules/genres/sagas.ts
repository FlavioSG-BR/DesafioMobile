import {call, put, all, takeLatest} from 'redux-saga/effects';

import genresProvider from '../../../lib/genres';
import GenresActions, {GenresTypes} from './duck';
import GenresListDTO from '../../../dtos/genres/GenresListDTO';

type GenresParams = ReturnType<typeof GenresActions.genresRequest>;
export function* listGenres({payload}: GenresParams): Generator {
  try {
    const {params} = payload;
    const result: any = yield call(genresProvider.findGenresList, params);
    const data = result as GenresListDTO;
    yield put(GenresActions.genresSuccess(data));
  } catch (err) {
    const errors = err;
    console.log({errors});
    yield put(GenresActions.genresError(errors));
  }
}

export default all([takeLatest(GenresTypes.GENRES_REQUEST, listGenres)]);
