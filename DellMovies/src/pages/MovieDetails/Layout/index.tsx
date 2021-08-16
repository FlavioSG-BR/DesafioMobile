import React from 'react';
import MoviesDTO from '../../../dtos/movies/MoviesDTO';
import {FlatList, TextInput} from 'react-native';
import MovieCard from './MovieCard';
import {Container} from './styles';

type MovieListPage = {
  results?: MoviesDTO[];
  query: string;
  setQuery: (query: string) => void;
  loading: boolean;
};

const Search: React.FC<MovieListPage> = ({results, query, setQuery}) => {
  return (
    <Container>
      <TextInput placeholder="query" value={query} onChangeText={setQuery} />
      {/* {results?.length && (
        <FlatList
          data={results}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <MovieCard movie={item} />}
        />
      )} */}
    </Container>
  );
};

export default Search;
