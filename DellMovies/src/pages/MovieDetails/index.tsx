import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFormik} from 'formik';

import SearchMovieParamsDTO from '../../dtos/movies/SearchMovieParamsDTO';

import {ApplicationState} from '../../store';
import MoviesActions from '../../store/modules/movies/duck';
import Layout from './Layout';
import validationSchema from './validation';

const INITIAL_STATE: SearchMovieParamsDTO = {
  api_key: 'c16003953e6b19268e9865459a69119b',
  query: '',
};

const MoviesDetails: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (store: ApplicationState) => store.movies.movies_list,
  );
  const [initialValues, setInitialValues] =
    useState<SearchMovieParamsDTO>(INITIAL_STATE);

  const handleParams = (data: SearchMovieParamsDTO) => {
    setInitialValues(data);
    dispatch(MoviesActions.movieRequest(data));
  };

  const handleClearSearch = () => {
    dispatch(
      MoviesActions.movieRequest({
        api_key: 'c16003953e6b19268e9865459a69119b',
        query: '',
      }),
    );
  };

  const {handleSubmit, errors, values, setFieldValue} = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (data: SearchMovieParamsDTO) => handleParams(data),
  });

  return (
    <Layout
      results={movies.results}
      query={values.query}
      setQuery={value => setFieldValue('query', value)}
      sendSearch={handleSubmit}
      errors={errors}
      clearSearch={handleClearSearch}
    />
  );
};

export default MoviesDetails;
