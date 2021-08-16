import React from 'react';
import MoviesDTO from '../../../dtos/movies/MoviesDTO';
import {FlatList} from 'react-native';
import MovieCard from './MovieCard';
import {Container} from './styles';

type MovieListPage = {
  results: MoviesDTO[];
};

const Home: React.FC<MovieListPage> = ({results}) => {
  return (
    <Container>
      <FlatList
        data={results}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <MovieCard movie={item} />}
      />
    </Container>
  );
};

export default Home;
