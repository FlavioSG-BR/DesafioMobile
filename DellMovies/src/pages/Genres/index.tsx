import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';

import GenresListParamsDTO from '../../dtos/genres/GenresListParamsDTO';

import {ApplicationState} from '../../store';
import GenresActions from '../../store/modules/genres/duck';
import Layout from './Layout';

const INITIAL_STATE: GenresListParamsDTO = {
  api_key: 'c16003953e6b19268e9865459a69119b',
  language: 'pt-BR',
};

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((store: ApplicationState) => store.genres.data);
  const [initialValues, setInitialValues] =
    useState<GenresListParamsDTO>(INITIAL_STATE);

  useEffect(() => {
    dispatch(GenresActions.genresRequest(initialValues));
    return () => {
      dispatch(GenresActions.clearData());
    };
  }, [dispatch, initialValues]);

  return (
    <Layout
      results={data.genres}
      // filters={values}
      // setFilters={value => setFieldValue('filters', value)}
      // onBack={handleBack}
      // onNext={handleSubmit}
      // errors={errors}
    />
  );
};

export default Movies;
