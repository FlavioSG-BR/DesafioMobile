import React from 'react';
import {Button, View} from 'react-native';
import GenresDTO from '../../../../dtos/genres/GenresDTO';

import {CardTitle} from './styles';

import {useTheme} from 'styled-components';

type GenreCardProps = {
  genre: GenresDTO;
  active: boolean;
  genresFilters: number[];
  setGenresFilters: (data: number[]) => void;
};
const GenreCard: React.FC<GenreCardProps> = ({
  genre,
  active,
  genresFilters,
  setGenresFilters,
}) => {
  const {colors} = useTheme();

  const handleGenres = (id: number) => {
    const newFilters = active
      ? genresFilters.filter((item: number) => item !== id)
      : [...genresFilters, id];
    setGenresFilters(newFilters);
  };

  return (
    <View style={{padding: 4}}>
      <Button
        title={genre.name}
        color={active ? colors.primary : colors.secondary}
        onPress={() => handleGenres(genre.id)}>
        <CardTitle>{genre.name}</CardTitle>
      </Button>
    </View>
  );
};

export default GenreCard;
