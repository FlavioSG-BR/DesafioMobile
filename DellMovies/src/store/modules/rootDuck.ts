import {combineReducers} from 'redux';

import {reducer as movies} from './movies/duck';
import {reducer as settings} from './settings/duck';

const reducers = combineReducers({
  movies,
  settings,
});

export default reducers;
