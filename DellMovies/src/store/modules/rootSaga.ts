import {all} from 'redux-saga/effects';

import movies from './movies/sagas';
import genres from './genres/sagas';

export default function* rootSaga() {
  yield all([movies, genres]);
}
