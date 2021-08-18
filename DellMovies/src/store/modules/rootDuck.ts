import {combineReducers} from 'redux';

import {reducer as movies} from './movies/duck';
import {reducer as settings} from './settings/duck';
import {reducer as genres} from './genres/duck';

const reducers = combineReducers({
  movies,
  settings,
  genres,
});

export default reducers;
