import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {useFormik} from 'formik';

import MoviesListParamsDTO from '../../dtos/movies/MoviesListParamsDTO';

import {ApplicationState} from '../../store';
import MoviesActions from '../../store/modules/movies/duck';
import Layout from './Layout';

const INITIAL_STATE: MoviesListParamsDTO = {
  api_key: 'c16003953e6b19268e9865459a69119b',
};

const Movies: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const movies = useSelector(
    (store: ApplicationState) => store.movies.movies_list,
  );
  const [filters, setFilters] = useState<MoviesListParamsDTO>(INITIAL_STATE);

  const handleParams = (data: MoviesListParamsDTO) => {
    setFilters(data);
    dispatch(MoviesActions.moviesRequest(data));
  };

  const {handleSubmit, errors, values, setFieldValue} = useFormik({
    filters,
    validateOnChange: false,
    onSubmit: (data: MoviesListParamsDTO) => handleParams(data),
  });

  useEffect(() => {
    dispatch(MoviesActions.clearData());
    dispatch(MoviesActions.moviesRequest(filters));
  }, [dispatch]);

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
