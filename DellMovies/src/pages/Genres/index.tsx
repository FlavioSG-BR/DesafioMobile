import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import GenresListParamsDTO from '../../dtos/genres/GenresListParamsDTO';

import {ApplicationState} from '../../store';
import GenresActions from '../../store/modules/genres/duck';
import MovieActions from '../../store/modules/movies/duck';
import Layout from './Layout';

const INITIAL_STATE: GenresListParamsDTO = {
  api_key: 'c16003953e6b19268e9865459a69119b',
  language: 'pt-BR',
};

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((store: ApplicationState) => store.genres.data);

  const filters = useSelector(
    (store: ApplicationState) => store.movies.filters.genres,
  );
  console.log({filters});
  const setGenresFilters = (genres: number[]) =>
    dispatch(MovieActions.setFilters({...filters, genres}));

  useEffect(() => {
    dispatch(GenresActions.genresRequest(INITIAL_STATE));
    return () => {
      dispatch(GenresActions.clearData());
    };
  }, [dispatch]);

  const clearData = () => {
    dispatch(MovieActions.clearFilters());
  };

  return (
    <Layout
      results={allGenres.genres}
      genresFilters={filters}
      setGenresFilters={setGenresFilters}
      clearData={clearData}
    />
  );
};

export default Movies;
