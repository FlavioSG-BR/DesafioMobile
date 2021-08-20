import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MoviesListParamsDTO from '../../dtos/movies/MoviesListParamsDTO';

import {ApplicationState} from '../../store';
import MoviesActions from '../../store/modules/movies/duck';
import Layout from './Layout';

const INITIAL_STATE: MoviesListParamsDTO = {
  api_key: 'c16003953e6b19268e9865459a69119b',
  with_genres: [],
};

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (store: ApplicationState) => store.movies.movies_list,
  );
  const genres = useSelector(
    (store: ApplicationState) => store.movies.filters.genres,
  );
  const [initialValues, setInitialValues] =
    useState<MoviesListParamsDTO>(INITIAL_STATE);

  useEffect(() => {
    dispatch(
      MoviesActions.moviesRequest({...initialValues, with_genres: genres}),
    );
  }, [dispatch, initialValues, genres]);

  return (
    <Layout
      results={movies.results}
      // filters={values}
      // setFilters={value => setFieldValue('filters', value)}
      // onBack={handleBack}
      // onNext={handleSubmit}
      // errors={errors}
    />
  );
};

export default Movies;
