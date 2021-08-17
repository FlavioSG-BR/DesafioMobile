import React from 'react';
import MoviesDTO from '../../../dtos/movies/MoviesDTO';
import {FlatList, TextInput, Button, View} from 'react-native';
import MovieCard from './MovieCard';
import {Container, Row} from './styles';

import {useTheme} from 'styled-components';

type MovieListPage = {
  results?: MoviesDTO[];
  query: string;
  setQuery: (query: string) => void;
  loading: boolean;
  sendSearch: () => void;
};

const Search: React.FC<MovieListPage> = ({
  results,
  query,
  setQuery,
  sendSearch,
}) => {
  const {colors} = useTheme();
  return (
    <Container>
      <Row style={{marginBottom: 15}}>
        <TextInput
          placeholder="Buscar"
          value={query}
          onChangeText={setQuery}
          style={{width: 90, flex: 3}}
        />
        <View style={{alignSelf: 'flex-end'}}>
          <Button
            title="Search"
            color={colors.secondary}
            onPress={sendSearch}
          />
        </View>
      </Row>
      {results?.length && (
        <FlatList
          data={results}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <MovieCard movie={item} />}
        />
      )}
    </Container>
  );
};

export default Search;
