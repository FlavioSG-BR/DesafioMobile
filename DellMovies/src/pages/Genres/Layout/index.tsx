import React from 'react';
import GenresDTO from '../../../dtos/genres/GenresDTO';
import {FlatList} from 'react-native';
import {Container} from './styles';
import GenreCard from './GenreCard';

type MovieListPage = {
  results: GenresDTO[];
};

const Home: React.FC<MovieListPage> = ({results}) => {
  return (
    <Container>
      <FlatList
        data={results}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <GenreCard genre={item} />}
      />
    </Container>
  );
};

export default Home;
