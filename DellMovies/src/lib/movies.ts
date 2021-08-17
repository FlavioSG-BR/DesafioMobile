import axios from 'axios';
import MoviesListDTO from '../dtos/movies/MoviesListDTO';
import MoviesListParamsDTO from '../dtos/movies/MoviesListParamsDTO';
import MoviesDTO from '../dtos/movies/MoviesDTO';
import SearchMovieParamsDTO from '../dtos/movies/SearchMovieParamsDTO';

export default {
  async findMovieList(params: MoviesListParamsDTO): Promise<MoviesListDTO> {
    console.log('errado');

    const {data} = await axios.get<MoviesListDTO>(
      'https://api.themoviedb.org/3/discover/movie/',
      {
        params,
      },
    );
    if (data.error) {
      throw Error('Lista não encontrada');
    }

    return data;
  },

  async findMovieByName(params: SearchMovieParamsDTO): Promise<MoviesDTO> {
    console.log('certo');
    const {data} = await axios.get<MoviesDTO>(
      'https://api.themoviedb.org/3/search/movie',
      {
        params,
      },
    );
    if (data.error) {
      throw Error('Lista não encontrada');
    }

    return data;
  },
};
