import React from 'react';
import MoviesDTO from '../../../dtos/movies/MoviesDTO';
import { FlatList } from 'react-native';
import MovieCard from './MovieCard';
import {
  Container,
  Header,
  HeaderText,
  HeaderTitle,
} from './styles';

type MovieListPage = {
  results: MoviesDTO[];
};

const Home: React.FC<MovieListPage> = ({results}) => {
  console.log(results)

  return (
    <Container>
      <Header>
        <HeaderTitle>Lista de filmes</HeaderTitle>
      </Header>
      <FlatList 
        data={results} 
        keyExtractor={(item) => String(item.id) } 
        renderItem={({item}) =>  <MovieCard movie={item} />}/>     
    </Container>
  );
};

export default Home;
