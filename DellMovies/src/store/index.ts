import storage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  Reducer,
  AnyAction,
} from 'redux';

import reducers from './modules/rootDuck';
import sagas from './modules/rootSaga';

import {MoviesState} from './modules/movies/types';
import {SettingsState} from './modules/settings/types';
import {GenresState} from './modules/genres/types';

export interface ApplicationState {
  movies: MoviesState;
  settings: SettingsState;
  genres: GenresState;
}

const persistConfig = {
  key: '@dellMovies',
  whitelist: ['movies', 'genres'],
  storage,
};

const middlewares: SagaMiddleware[] = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer<ApplicationState>(
  persistConfig,
  reducers as unknown as Reducer<ApplicationState, AnyAction>,
);

export const store: Store<ApplicationState> = createStore(
  persistedReducer,
  composer,
);
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);
