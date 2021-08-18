import React from 'react';
import GenresDTO from '../../../../dtos/genres/GenresDTO';
import {Card, CardTitle} from './styles';

type MovieCardProps = {
  genre: GenresDTO;
};
const MovieCard: React.FC<MovieCardProps> = ({genre}) => {
  return (
    <Card>
      <CardTitle>{genre.name}</CardTitle>
    </Card>
  );
};

export default MovieCard;
