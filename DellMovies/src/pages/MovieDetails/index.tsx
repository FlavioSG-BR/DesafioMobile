import React, {useEffect, useState} from 'react';
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
  const [params, setParams] = useState<SearchMovieParamsDTO>(INITIAL_STATE);

  const handleParams = (data: SearchMovieParamsDTO) => {
    setParams(data);
    dispatch(MoviesActions.movieRequest(data));
  };

  const {handleSubmit, errors, values, setFieldValue} = useFormik({
    validationSchema,
    params,
    onSubmit: (data: SearchMovieParamsDTO) => handleParams(data),
  });

  useEffect(() => {
    dispatch(MoviesActions.clearData());
    dispatch(MoviesActions.movieRequest(params));
  }, [dispatch, params]);

  return (
    <Layout
      results={movies.results}
      query={values}
      setQuery={value => setFieldValue('query', value)}
      onNext={handleSubmit}
      errors={errors}
    />
  );
};

export default MoviesDetails;
