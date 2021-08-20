import React from 'react';
import GenresDTO from '../../../dtos/genres/GenresDTO';
import {FlatList, Button, Text} from 'react-native';
import {Container} from './styles';
import GenreCard from './GenreCard';

type MovieListPage = {
  results: GenresDTO[];
  genresFilters: number[];
  setGenresFilters: (data: number[]) => void;
  clearData: () => void;
};

const Home: React.FC<MovieListPage> = ({
  results,
  genresFilters,
  setGenresFilters,
  clearData,
}) => {
  return (
    <Container>
      <Button title={'Limpar Filtros'} onPress={() => clearData()} />
      <FlatList
        data={results}
        keyExtractor={item => String(item.id)}
        style={{padding: 4}}
        renderItem={({item}) => (
          <GenreCard
            genre={item}
            active={genresFilters.includes(item.id)}
            setGenresFilters={setGenresFilters}
            genresFilters={genresFilters}
          />
        )}
      />
    </Container>
  );
};

export default Home;
