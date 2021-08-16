import React from 'react';
import MoviesDTO from '../../../../dtos/movies/MoviesDTO';
import {Image} from 'react-native';
import {Card, CardTitle, CardText} from './styles';

type MovieCardProps = {
  movie: MoviesDTO;
};
const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  return (
    <Card>
      <CardTitle>{movie.title}</CardTitle>
      <Image
        style={{height: 140, width: 145}}
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
      />
      <CardText bold>
        Sinopse: <CardText>{movie.overview}</CardText>
      </CardText>
      <CardText>{movie.release_date}</CardText>
    </Card>
  );
};

export default MovieCard;
